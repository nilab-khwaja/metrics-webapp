import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMakeup } from '../redux/makeupSlice';
import '../styles/makeups.css';

const Makeup = () => {
  const dispatch = useDispatch();
  const { makeups, status, error } = useSelector((state) => state.makeups);
  const [filteredMakeups, setFilteredMakeups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchMakeup());
  }, [dispatch]);

  useEffect(() => {
    // Filter out products with broken image links
    const filtered = makeups.filter((makeup) => {
      const img = new Image();
      img.src = makeup.image_link;
      const isImageValid = img.complete && img.width > 0 && img.height > 0;

      // check if the product name and brand are not null

      const productName = makeup.name ? makeup.name.toLowerCase() : '';
      const brandName = makeup.brand ? makeup.brand.toLowerCase() : '';
      const query = searchQuery.toLowerCase();

      // apply both filters

      return isImageValid && (productName.includes(query) || brandName.includes(query));
    });
    setFilteredMakeups(filtered);
  }, [makeups, searchQuery]);

  if (status === 'loading') {
    return <div>Loading....</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="makeup-body">
      <div className="searchBox">
        <input
          type="search"
          placeholder="Serach product by its name or brand.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-box"
        />
        {/* <div className='searchImg'></div> */}
      </div>
      <ul className="makeup-container">
        {filteredMakeups.map((makeup) => (
          <li key={makeup.id} className="makeup-item">
            <Link to={`/makeup-detail/${makeup.id}`} className="item-link">
              <img src={makeup.image_link} alt="product-img" />
              <p>
                Product Type:
                {' '}
                {makeup.product_type}
                <br />
                Brand:
                {' '}
                {makeup.brand}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Makeup;
