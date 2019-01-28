import React from 'react';
import {Money, Mail} from './forms/CorrectInputs'
import visa from "./picture/logos/visa.svg"
import mastercard from "./picture/logos/mastercard.svg"
import maestro from "./picture/logos/maestro.svg"
import './CardBank.css'
import StateForm from "./forms/StateForm";

class CardBank extends StateForm {
    path = '/payment';
    form = (
        <form name="any-bank" className="wrapper-any-bank" onSubmit={this.submit}>
            <div className="card-inputs card-any-bank content-any-bank__card-any-bank">
                <div className="icon">
                    <img className="icon_image" src={visa} alt="visa_image"
                         title="Visa"/>
                    <img className="icon_image" src={mastercard} alt="mastercard_image"
                         title="Mastercard"/>
                    <img className="icon_image" src={maestro} alt="maestro_image"
                         title="Maestro"/>
                </div>
                    <input required pattern="[0-9]{16}" type="text" name="cardNumber"
                           className="enter-style card-any-bank__large" placeholder="Номер карты"/><br/>
                    <input required pattern="([0-9]|0[0-9]|1[0-2])/[1-9][0-9]"
                           type="text" name="expirationDate" className="enter-style
                            card-any-bank__mid" placeholder="ММ/ГГ"/>
                    <input required pattern="[0-9]{3}" type="text"
                           name="CVC" className="enter-style card-any-bank__small" placeholder="CVC"/>

            </div>
            <div className="form-any-bank">
                <ul className="page__list-form">
                    <li>
                        <label htmlFor="any-sum">Сумма</label>
                        <Money/>
                    </li>
                    <li>
                        <label htmlFor="any-comment">Комментарий</label>
                        <input name="comment" id="any-comment" pattern=".{0,150}" type="text"
                               className="enter-style" placeholder="До 150 символов"/>
                    </li>
                    <li>
                        <label htmlFor="any-email">Ваша эл.почта</label>
                        <Mail placeholder="Для квитанций об оплате"/>
                    </li>
                </ul>
                <button name="any-bank" type="submit">Заплатить</button>
            </div>
        </form>
    );
}

export default CardBank