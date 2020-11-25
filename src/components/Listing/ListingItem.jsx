import PropTypes from 'prop-types';

function ListingItem (props) {

    let quantityLevel;
    if (props.item.quantity < 11) {
        quantityLevel = 'low'
    } else if (props.item.quantity < 21) {
        quantityLevel = 'medium'
    } else {
        quantityLevel = 'high'
    }

    let currencyCode;
    if (props.item.currency_code === 'USD') {
        currencyCode = '$';
    } else if (props.item.currency_code === 'EUR') {
        currencyCode = '€';
    } else {
        currencyCode = '';
    }


    let title;
    if (props.item.title && props.item.title.length > 50) {
        title = props.item.title.substring(0,50) + '...';
    } else {
        title = '';
    }

    return (
    <div className="item">
        <div className="item-image">
            <a href={props.item.url}>
                <img src={props.item.image_url} alt={props.item.title} />
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{ title || props.item.title }</p>
            <p className="item-price">{currencyCode || props.item.currency_code} {props.item.price}</p>
            <p className={`item-quantity level-${quantityLevel}`}>{props.item.quantity}</p>
        </div>
    </div>
    );
}


ListingItem.propTypes = {
    item: PropTypes.exact({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        image_url: PropTypes.string,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    })
}


export default ListingItem;