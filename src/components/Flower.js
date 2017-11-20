import React from 'react';
import { FormatPrice } from '../helpers';

class Flower extends React.Component {
    render() {
        // destructuring
        // let { details } = this.props;
        let details  = this.props.details;
        return (
            <li className="menu-flower">
                <img src={details.image} alt={details.name} />
                <h3 className="flower-name">
                    {details.name}
                    <span className="price">{FormatPrice(details.price)}</span>
                </h3>
                <p>{details.description}</p>
                <button>Add to order</button>
            </li>
        )
    }
}

export default Flower;