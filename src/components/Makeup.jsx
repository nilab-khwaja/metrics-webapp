import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMakeup } from '../redux/makeupSlice'
import { Link } from 'react-router-dom'

const Makeup = () => {
  const dispatch = useDispatch()
  const {makeups, status, error} = useSelector((state) => state.makeups)
  const [filteredMakeups, setFilteredMakeups] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(()=>{
    dispatch(fetchMakeup())
  }, [dispatch]);

  useEffect(() => {
    // Filter out products with broken image links
    const filtered = makeups.filter((makeup) => {
      const img = new Image();
      img.src = makeup.image_link;
      const isImageValid = img.complete && img.width >0 && img.height>0;

      //check if the product name and brand are not null

      const productName = makeup.name ? makeup.name.toLowerCase(): '';
      const brandName = makeup.brand ? makeup.brand.toLowerCase(): '';
      const query = searchQuery.toLowerCase();
      
      //apply both filters

      return isImageValid && (productName.includes(query) || brandName.includes(query));
    })
    setFilteredMakeups(filtered);
  }, [makeups, searchQuery]);



  if(status === 'loading'){
    return <div>Loading....</div>
  }

  if(status === 'failed'){
    return <div>{error}</div>
  }


  return (  
    <div> 
      <input type='search' placeholder='serach by product name or brand' value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)} />
      <ul className='makeup-container'>
        {filteredMakeups.map((makeup) => (
          <li key={makeup.id}>
            <Link to = {`/makeup-detail/${makeup.id}`}>
            <img src= {makeup.image_link} alt='product-img' width={100} height={100} />
            <h1>{makeup.product_type}</h1>
            <h3>{makeup.brand} , Name: {makeup.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Makeup