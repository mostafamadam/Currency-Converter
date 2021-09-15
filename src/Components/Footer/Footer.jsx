import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from "./Footer.module.css";


class Footer extends Component {
    render() {
        return (
            <>
                <div className={`fixed-bottom btn-group btn-group-toggle w-100`} data-toggle="buttons">
                    <Link to="/Rates" className={`${style.btnlight} col-4 btn btn-light border-left-0 active`}>
                        <input type="radio" name="options" id="option1" /> Rates
                    </Link>
                    <Link to="/Conversion" className={`${style.btnlight} col-4 btn btn-light `}>
                        <input type="radio" name="options" id="option2" /> Conversion
                    </Link>
                    <Link to="/Conversion" className={`${style.btnlight} col-4 btn btn-light border-right-0`}>
                        <input type="radio" name="options" id="option3" /> Conversion 2
                    </Link>
                </div>
            </>
        );
    }
}

export default Footer;
