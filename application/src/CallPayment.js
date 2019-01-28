import React from 'react';
import StateForm from "./forms/StateForm";
import './CallPayment.css'
import {AccountNumber, BIC, Mail, Money, TaxId, Telephone, VAT} from  './forms/CorrectInputs'

class CallPayment extends StateForm {
    path = '/request';
    form = (
        <form className="wrapper-call-payment" onSubmit={this.submit}>
            <ul className="page__list-form">
                <li>
                    <label htmlFor="call-inn">ИНН получателя</label>
                    <TaxId/>
                </li>
                <li>
                    <label htmlFor="call-bik">БИК</label>
                    <BIC/>
                </li>
                <li>
                    <label htmlFor="call-balance">Номер счета</label>
                    <AccountNumber/>
                </li>
                <li>
                    <label htmlFor="call-nds">НДС</label>
                    <VAT/>
                </li>
                <li>
                    <label htmlFor="call-cost">Сколько</label>
                    <Money/>
                </li>
                <li>
                    <label htmlFor="call-number">Номер телефона</label>
                    <Telephone/>
                        <span>Оставляя телефон,
                            вы соглашетесь на обработку данных</span>
                </li>
                <li>
                    <label htmlFor="call-email">Эл.почта</label>
                    <Mail/>
                </li>
            </ul>
            <button name="call-payment" type="submit">Создать платеж</button>
        </form>
    )
}

export default CallPayment