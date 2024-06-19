import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Business = () => {
    const [businesses, setBusinesses] = useState([])
    const {category} = useParams()

    useEffect (() => {
    getBusinesses()
    }, [category])

   const getBusinesses = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/businesses?category=${category}`)
        console.log(response.data);
        setBusinesses(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    return( 
    <div className="Restaurants">
        <h2>{category} List</h2>
       
        <section className="container-grid">
        {businesses.map((business) => (
          <div key={business._id} className="business-card">
            <img src={business.img} alt={business.name} />
            <h3>Name: {business.name}</h3>
            <p>Location: {business.location}</p>
            <Link to={`/categories/${category}/${business._id}/coupons`} ><button>Coupons Available</button></Link>

       </div>
        ))}

        </section>

      
      </div>
  )
}
export default Business;
