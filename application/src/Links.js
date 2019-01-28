import React, {Component} from 'react';
import './Links.css'

class Links extends Component {
    render () {
        return (
            <div className="footer-block__links">
                <a target="_blank" rel="noopener noreferrer"
                   href={this.props.links.tw.site}>
                    <img src={this.props.links.tw.img} alt={this.props.links.tw.name + "_image"}/>
                    {this.props.links.tw.option}
                </a>
                <a target="_blank" rel="noopener noreferrer"
                   href={this.props.links.fb.site}>
                    <img src={this.props.links.fb.img} alt={this.props.links.fb.name + "_image"}/>
                    {this.props.links.fb.option}
                </a>
                <a target="_blank" rel="noopener noreferrer"
                   href={this.props.links.go.site}>
                    <img src={this.props.links.go.img} alt={this.props.links.go.name + "_image"}/>
                </a>
                <a target="_blank" rel="noopener noreferrer"
                   href={this.props.links.vk.site}>
                    <img src={this.props.links.vk.img} alt={this.props.links.vk.name + "_image"}/>
                </a>
                <a target="_blank" rel="noopener noreferrer"
                   href={this.props.links.od.site}>
                    <img src={this.props.links.od.img} alt={this.props.links.od.name + "_image"}/>
                </a>
                <a target="_blank" rel="noopener noreferrer"
                   href={this.props.links.li.site}>
                    <img src={this.props.links.li.img} alt={this.props.links.li.name + "_image"}/>
                </a>
            </div>
        )
    }
}

export default Links