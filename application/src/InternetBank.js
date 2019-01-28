import React from 'react';
import StateForm from "./forms/StateForm";
import {AccountNumber, BIC, Money, TaxId, VAT} from './forms/CorrectInputs'
import './InternetBank.css'
import { stringify } from '../node_modules/query-string';


let submit = (event) => {
    let data = new FormData(event.target);
    let obj = {};
    for (const [key, value]  of data.entries()) {
        obj[key] = value;
    }
    window.open("http://localhost:8081/payment?" + stringify(obj), '_blank');
    event.preventDefault()
};


const InternetBank = () =>
    <form className='wrapper-my-bank' onSubmit={submit}>
        <ul className="page__list-form">
            <li>
                <label htmlFor="my-from">От кого</label>
                <TaxId/>
            </li>
            <li>
                <label htmlFor="my-number">Номер счета</label>
                <AccountNumber/>
            </li>
            <li>
                <label htmlFor="my-bik">БИК</label>
                <BIC/>
            </li>
            <li>
                <label htmlFor="my-cost">Сколько</label>
                <Money/>
            </li>
            <li>
                <label htmlFor="my-nds">НДС</label>
                <VAT/>
            </li>
        </ul>
        <button name="my-bank" type="submit" className="my-bank__button">Получить файл для интернет-банка</button>
    </form>;

export default InternetBank