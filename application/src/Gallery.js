import React, {Component} from 'react';
import "./Gallery.css"

class Gallery extends Component{
    render() {
        return (
        <div className="footer-block__gallery">
            <figure className="card footer-block__card">
                <p><img className="card_image" src={this.props.gallery.pc.imagePath}
                        alt={this.props.gallery.pc.altPhoto} title={this.props.gallery.pc.name}/></p>
                <figcaption>
                    <p>{this.props.gallery.pc.name}</p>
                    <span>{this.props.gallery.pc.price}</span>
                </figcaption>
            </figure>
            <figure className="card footer-block__card">
                <p><img className="card_image" src={this.props.gallery.vr.imagePath}
                        alt={this.props.gallery.vr.altPhoto} title={this.props.gallery.vr.name}/></p>
                <figcaption>
                    <p>{this.props.gallery.vr.name}</p>
                    <span>{this.props.gallery.vr.price}</span>
                </figcaption>
            </figure>
            <figure className="card footer-block__card">
                <p><img className="card_image" src={this.props.gallery.xbox.imagePath}
                        alt={this.props.gallery.xbox.altPhoto} title={this.props.gallery.xbox.name}/></p>
                <figcaption>
                    <p>{this.props.gallery.xbox.name}</p>
                    <span>{this.props.gallery.xbox.price}</span>
                </figcaption>
            </figure>
        </div>
        )
    }
}

export default Gallery