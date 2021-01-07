import PropTypes from 'prop-types';

const getQualityLevel = (quantity) => {
if (quantity < 11) {
    return 'low'
} else if (quantity < 21) {
    return 'medium'
} else {
    return 'high'
}
}

const getCurrency = (currencyCode) => {
    if (currencyCode === 'USD') {
        return '$';
    } else if (currencyCode === 'EUR') {
        return '€';
    } else {
        return '';
    }
} 

const getTitle = (title) => {
    if (title && title.length > 50) {
        return title.substring(0,50) + '...';
    } else {
        return '';
    }
}

function ListingItem (props) {
    const currencyCode = getCurrency(props.item.currency_code);
    const quantityLevel = getQualityLevel(props.item.quantity);
    const title = getTitle(props.item.title);


    return (
    <div className="item">
        <div className="item-image">
            <a href={props.item.url}>
                {image_url && <img src={props.item.image_url} alt={props.item.title} />}
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