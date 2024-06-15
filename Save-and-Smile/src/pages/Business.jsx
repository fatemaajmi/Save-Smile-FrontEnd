import React, { useState, useEffect } from 'react';
import Category from './Category';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Business = () => {
    const [businesses, setBusinesses] = useState([])
    const {category} = useParams()

    useEffect (() => {
    getBusinesses()
    }, [])

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
        <h2>Restaurants List</h2>
       
        <section className="container-grid">
    
        {businesses.map((business) => (
          <div key={business._id} className="business-card">
            <Category ><h3>{business.name}</h3>
            <p><strong>Location:</strong> {business.location}</p>
            <p><strong>Type:</strong> {business.type}</p>
            {business.img && <img src={business.img} alt={business.name} />}
        </Category>  </div>
        ))}

        </section>
      </div>
  )
}
export default Business;
