import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import '../styles/makeupdetail.css';

const MakupDetail = () => {
  const { produtId } = useParams();
  const makeup = useSelector((state) => {
    state.makeups.makeups.find((item) => item.id === parseInt(produtId, 10));
  });

  if (!makeup) {
    return <div>Product not found</div>;
  }

  return (
    <div className="makeup-detail">
      <div className="title">
        <Link to="/"><button type="submit" className="goBack">Go Back</button></Link>
      </div>
      <h1>{makeup.name}</h1>
      <div className="detail">
        <ul className="description">
          <li>
            <h3>
              <strong>Product type: </strong>
              {makeup.product_type}
            </h3>
          </li>
          <li>
            <p>
              <strong> Price:  </strong>
              $
              {makeup.price}
              /piece
            </p>
          </li>
          <li>
            <p>
              <strong> Price-sign: </strong>
              $
              {makeup.price_sign}
              /piece
            </p>
          </li>
          <li>
            <p>
              <strong> Description: </strong>
              {makeup.description}
            </p>
          </li>
          <li>
            <h3> Colors: </h3>
            <ul>
              {makeup.product_colors.map((color, index) => (
                <li key={color.hex_value} className="colors">
                  <div style={{
                    backgroundColor: color.hex_value, width: '20px', height: '20px', display: 'inline-block',
                  }}
                  />
                  {color.colour_name}
                  {index < makeup.product_colors.length - 1 && ','}
                </li>
              ))}
            </ul>
          </li>

        </ul>
        <div className="image"><img src={makeup.image_link} alt={makeup.name} /></div>
      </div>
    </div>
  );
};

export default MakupDetail;
