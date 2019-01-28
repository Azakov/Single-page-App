import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="information header-block__information">
                <h1>{this.props.args.title}</h1>
                <span>{this.props.args.mobile}</span>
                <a href={"https://" + this.props.args.websiteName + "/developer/sheet/view/developerId,16249/"}>
                    {this.props.args.websiteName}</a>
                <a href={"https://" + this.props.args.mail + "/"}>{this.props.args.mail}</a>
                <br/>
                <a href={this.props.args.websiteCompany}>Информация о компании</a>
                <br/><br/>
                <a href={this.props.args.requisites}>
                    Показать реквизиты</a>
            </div>
        )
    }
}

export default Header;