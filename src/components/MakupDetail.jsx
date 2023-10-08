import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const MakupDetail = () => {
    const {produtId} = useParams();
    const makeup = useSelector((state) => {
        return state.makeups.makeups.find((item) => item.id === parseInt(produtId));
    });

    if(!makeup){
        return <div>Product not found</div>
    }

  return (
    <div>
        <Link to='/' ><button type='submit'>Go Back</button></Link>
        <img src={makeup.image_link} alt={makeup.name} width={100} height={100} />
        <h2>{makeup.name}</h2>
        <p><strong>Price: </strong>${makeup.price}/piece</p>
        <p><strong>Price-sign: </strong>${makeup.price_sign}/piece</p>
        <p><strong>Description: </strong>{makeup.description}</p>
        <p>Colors</p><ul>
                {makeup.product_colors.map((color) =>(
                <li key={color.hex_value}>
                    <div style={{backgroundColor:color.hex_value, width:'20px', height: '20px', display:'inline-block'}} ></div>
                    {color.colour_name}
                </li>
              ))}
            </ul>
    </div>
  )
}

export default MakupDetail