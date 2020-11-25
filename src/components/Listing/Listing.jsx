import ListingItem from './ListingItem';

function Listing(props) {
    return (
    <div className="item-list">
        {props.items.map(item => <ListingItem item={item} key={item.listing_id} />)}
    </div>
    );
};

Listing.defaultProps = {
    items: [],
};

export default Listing;