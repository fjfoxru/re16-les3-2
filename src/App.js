import logo from './logo.svg';
import etsy from './data/etsy';
import Listing from './components/Listing/Listing';

import './App.css';

function App() {
  let data = etsy.map(item => {
    return {
      listing_id : item.listing_id,
      url : item.url,
      image_url : item.MainImage ? item.MainImage.url_570xN: null,
      title : item.title,
      currency_code : item.currency_code,
      price : item.price,
      quantity : item.quantity,
    }
  });

  return (
    <div className="App">
      <Listing items={data}/>
    </div>
  );
}

export default App;
