import React, {Component} from 'react';
import Header from './Header';
import './App.css';
import CardBank from "./CardBank"
import InternetBank from "./InternetBank"
import CallPayment from "./CallPayment"
import Gallery from "./Gallery"
import Links from "./Links";

class App extends Component {
    render() {
        const {header, gallery, information, links} = this.props;
        return (
            <div className="page__wrapper">
                <header className="header-block page__header-block">
                    <Header args={header}/>
                    <img className="header-block__image" src={header.photo} alt={header.altPhoto}
                         title={header.title}/>
                </header>
                <main className="main-block page__main-block">
                    <input name="payment" id="just-pay" type="radio" defaultChecked/>
                    <input name="payment" id="get-payment" type="radio"/>
                    <input name="bank" id="any-bank" type="radio" defaultChecked/>
                    <input name="bank" id="my-bank" type="radio"/>
                    <label className="just-pay main-block__payment" htmlFor="just-pay">Заплатить</label>
                    <label className="get-payment main-block__payment" htmlFor="get-payment">Запросить платеж</label>
                    <br/>
                    <div className="any-bank main-block__bank">
                        <label htmlFor="any-bank">С карты любого банка</label>
                    </div>
                    <div className="my-bank main-block__bank">
                        <label htmlFor="my-bank">Из своего интернет-банка</label>
                    </div>
                    <div className="content-any-bank">
                        <CardBank/>
                    </div>
                    <div className="content-my-bank">
                        <h3>Сформируйте платежку и загрузите её в свой банк для подписи</h3>
                        <InternetBank/>
                    </div>
                    <div className="content-call-payment">
                        <h3>Создайте платежку, а {header.title}
                            подпишет её у себя в интернет-банке</h3>
                        <CallPayment/>
                    </div>
                </main>
                <footer className="footer-block page__footer-block">
                    <h2 className="footer-block__title">О компании {header.title}</h2>
                    <Gallery gallery={gallery}/>
                    <div className="footer-block__info">
                        {information.mainPart}
                        <details>{information.detailsPart}</details>
                    </div>
                    <Links links={links}/>
                </footer>
            </div>
        );
    }
}

export default App;
