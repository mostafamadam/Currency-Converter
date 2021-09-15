import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from "./Conversion.module.css";

class Conversion2 extends Component {
    render() {
        return (
            <div className={`${style.Top} vh-100`}>
                <div className="container">
                    <div className={`py-4 row justify-content-center align-items-center`}>
                        <div className="my-2">
                            <label className="text-white">Currency Conversion</label>
                        </div>
                    </div>
                    <div className={`px-4`}>
                        <label className="text-white float-left">{this.props.from}</label>
                        <label className="text-white float-right">{this.props.amount}</label>
                    </div>
                    <hr className={`${style.currmar} mb-2`} />
                    <div className="px-4">
                        <label className="text-white float-left">{this.props.to}</label>
                        <label className="text-white float-right">{this.props.convertedAmount}</label>
                    </div>
                </div>
            </div>
        );
    }
}

function Conversion2actionCreator(state) {
    return {
        from: state.from,
        to: state.to,
        amount: state.amount,
        convertedAmount: state.convertedAmount
    }
}

export default connect(Conversion2actionCreator, null)(Conversion2);
