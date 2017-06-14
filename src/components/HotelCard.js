import React, {Component} from 'react';
import "../../src/css/style.css"

const MAX_DESCRIPTION_LENGHT = 100;

class HotelCard extends Component {
    render() {
        const {id, name, description, price, image, url} = this.props;
        return (
            <div className="hotel-card">
                <img className="hotel-image" src={image} alt="image"/>
                <div className="hotel-body">
                    <h3 className="hotel-title">{name}</h3>
                    <p className="hotel-description">
                        { description.length > MAX_DESCRIPTION_LENGHT
                            ? description.substring(0, MAX_DESCRIPTION_LENGHT) + "..." :
                            description
                        }
                    </p>
                </div>
                <div className="hotel-book">
                    <span className="hotel-price">{price}$</span>
                    <a
                        href={`https://ru.airbnb.com/rooms/${id}`}
                        target="_blank"
                        className="hotel-book-link"
                    >Book now!</a>
                </div>
            </div>
        )
    }
}
;

export default HotelCard;