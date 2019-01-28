import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import todd from './picture/todd.jpg';
import skyrim_pc from './picture/skyrim_pc.jpg'
import skyrim_vr from './picture/skyrim_vr.jpg'
import skyrim_xbox from './picture/skyrim_xbox.jpg'
import tw from "./picture/logos/twitter.svg"
import fb from "./picture/logos/facebook.svg"
import vk from "./picture/logos/vkontakte.svg"
import li from "./picture/logos/linkedin.svg"
import go from "./picture/logos/google.svg"
import od from "./picture/logos/odnoklassniki.svg"

const header = {
    title: 'Индивидуальный предприниматель Том-Купи Говард ',
    mobile: '+880055553535',
    websiteName: 'www.mobygames.com',
    mail: 'help.bethesda.net',
    websiteCompany: 'https://bethesda.net/ru/dashboard',
    requisites: 'https://store.bethesda.net/store/bethesda/ru_RU/ContinueShopping/ThemeID.39243600',
    photo: todd,
    altPhoto: "todd_image"
};

const gallery = {
    pc: {
        imagePath: skyrim_pc,
        altPhoto: "",
        name: 'Скайрим на PC',
        price: '29.99$'
    },
    vr: {
        imagePath: skyrim_vr,
        altPhoto: "",
        name: 'Скайрим на VR',
        price: '39.99$'
    },
    xbox: {
        imagePath: skyrim_xbox,
        altPhoto: "",
        name: 'Скайрим на XBOX',
        price: '34.99$'
    }
};

const information = {
    mainPart: "Говард начал работать в Bethesda в 1994 году. Он был игровым директором и исполнительным " +
    "продюсером игры Fallout 3,\n" +
    "    которая получила большое количество наград и в 2008 году была названа игрой года во многих" +
    " различных изданиях. До\n" +
    "    этого он управлял разработкой The Elder Scrolls IV: Oblivion, вышедшей в 2006 году и также " +
    "получившей звание игры\n" +
    "    года. Сейчас последней его игрой является Fallout 4, релиз которой состоялся 10 ноября 2015 года.",
    detailsPart: "Он также являлся лидером и дизайнером проекта The Elder Scrolls III: Morrowind (2002), " +
    "продюсером и\n" +
    "        дизайнером The Terminator: Future Shock (1995) и SkyNET (1996), и лидером и дизайнером проекта" +
    " The Elder Scrolls\n" +
    "        Adventures: Redguard (1998).\n" +
    "        Говард часто выступает на мероприятиях игровой индустрии, и его игры были представлены в газетах" +
    " Newsweek, CNN,\n" +
    "        USA Today, и The Today Show, и на обложках различных журналов. Говард заявляет, что философия" +
    " Bethesda в играх\n" +
    "        серии The Elder Scrolls — позволить людям «жить другой жизнью в другом мире»."
};

const links = {
    tw: {
        name: "twitter",
        site: "https://twitter.com",
        option: "Твитнуть",
        img: tw
    },

    fb: {
        name: "facebook",
        site: "https://www.facebook.com",
        option: "Поделиться",
        img: fb
    },

    go: {
        name: "google",
        site: "https://google.com",
        img: go
    },

    vk: {
        name: "vkontakte",
        site: "https://vk.com",
        img: vk
    },

    od: {
        name: "odnoklassniki",
        site: "https://ok.ru",
        img: od
    },

    li: {
        name: "linkedin",
        site: "https://www.linkedin.com",
        img: li
    }

}

ReactDOM.render(<App header={header} gallery={gallery} information={information}
                     links={links}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
