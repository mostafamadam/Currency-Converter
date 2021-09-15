import React, { Component } from 'react';
import axios from 'axios';
import flag from '../../imgs/flag-round-500.png';
import style from "./Rates.module.css";
import { connect } from 'react-redux';
const host = 'api.frankfurter.app';

class Rates extends Component {
    GetRates = async () => {
        let { data } = await axios.get(`https://${host}/latest?from=USD`);
        this.props.getRates(Object.entries(data.rates));
    }

    componentDidMount() {
        this.GetRates();
    }

    render() {
        return (
            <div className="container">
                <div className={`${style.Top} row justify-content-center align-items-center flex-column`}>
                    <div className={`${style.img} mt-4`}>
                        <img className={`${style.flagimg}`} src={flag} alt="" />
                    </div>
                    <label className="text-white mt-1 mb-5">USD</label>
                </div>
                <div className={`${style.btm}`}>
                    <div >
                        <ul className="list-group list-group-flush">
                            {
                                this.props.rates ?
                                    this.props.rates.map((key, index) => {
                                        return (
                                            <li key={index} className={`${style.boxshaddow} list-group-item`}>
                                                <div className={`row float-left`}>
                                                    <div className={`${style.CurImgs} ml-3`}>
                                                        <img className={`${style.flagimg}`} src={flag} alt="" />
                                                    </div>
                                                    <div className={`${style.CurImgs} ml-1`}>
                                                        <label>{key[0]}</label>
                                                    </div>
                                                </div>
                                                <div className={`float-right`}>
                                                    <label>{key[1]}</label>
                                                </div>
                                            </li>
                                        );
                                    }) : ""
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function RatesactionCreator(state) {
    return {
        rates: state.rates
    }
}

function Ratesdispatcher(Ratesdispatch) {
    return {
        getRates: function (rates) {
            return Ratesdispatch({ type: "Rates", rates: rates })
        }
    }
}

export default connect(RatesactionCreator, Ratesdispatcher)(Rates);