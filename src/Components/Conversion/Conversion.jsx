import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import fx from 'money'
import style from "./Conversion.module.css";
const host = 'api.frankfurter.app';
let from = "", to = "", amount = 0, convertedAmount = 0, ratesdata = {};

class Conversion extends Component {
    GetRates = async () => {
        let { data } = await axios.get(`https://${host}/latest?from=USD`);
        ratesdata = data.rates;
        this.props.getRates(Object.entries(data.rates));
    }
    getFromData(e) {
        from = e.target.value;
    }
    getToData(e) {
        to = e.target.value;
    }
    getAmountData(e) {
        amount = e.target.value;
    }

    componentDidMount() {
        this.GetRates();
    }
    Calculate = () => {
        if (from && to && amount) {
            fx.rates = ratesdata;
            convertedAmount = fx(amount).from(from).to(to);
            this.props.convert(this.props.rates, from, to, amount, convertedAmount);
            from = ""
            to = ""
            amount = 0
            convertedAmount = 0
            ratesdata = {}
            this.props.history.push("/Conversion2");
        } else {
            alert('please enter the the required data');
        }

    }
    render() {
        return (
            <div className="container">
                <div className={`${style.Top} py-4 row justify-content-center align-items-center`}>
                    <div className="my-2">
                        <label className="text-white">Currency Conversion</label>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6">
                        <label>From</label>
                        <div className={`btn-group w-100`}>
                            <select onChange={this.getFromData} className={`${style.ddls} w-100`}>
                                <option value="0">From</option>
                                {
                                    this.props.rates ?
                                        this.props.rates.map((key, index) => {
                                            return (
                                                <option value={key[0]} key={index}>{key[0]}</option>
                                            );
                                        }) : ""
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <label>To</label>
                        <div className="btn-group w-100">
                            <select onChange={this.getToData} className={`${style.ddls} w-100`}>
                                <option value="0">To</option>
                                {
                                    this.props.rates ?
                                        this.props.rates.map((key, index) => {
                                            return (
                                                <option value={key[0]} key={index}>{key[0]}</option>
                                            );
                                        }) : ""
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <label>Amount</label>
                        <div className="input-group">
                            <input onBlur={this.getAmountData} type="number" step="0.01" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-6 offset-3">
                        <button onClick={this.Calculate} type="button" className={`${style.calcbtn} btn`}>Calculate Now!</button>
                    </div>
                </div>
            </div>
        );
    }
}

function ConversionactionCreator(state) {
    return {
        rates: state.rates,
        from: state.from,
        to: state.to,
        amount: state.amount,
        convertedAmount: state.convertedAmount
    }
}

function Conversiondispatcher(Conversiondispatch) {
    return {

        convert: function (rates, from, to, amount, convertedAmount) {
            return Conversiondispatch({ type: "conversion", rates: rates, from: from, to: to, amount: amount, convertedAmount: convertedAmount })
        },
        getRates: function (rates) {
            return Conversiondispatch({ type: "Rates", rates: rates })
        }
    }
}

export default connect(ConversionactionCreator, Conversiondispatcher)(Conversion);
