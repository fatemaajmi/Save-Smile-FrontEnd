import React, { useState, useEffect } from 'react';
import Category from './Category';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Business = () => {
    const [businesses, setBusinesses] = useState([])
    const {category} = useParams()

    useEffect (() => {
    getBusinesses()
    }, [])

   const getBusinesses = async () => {
    try {
        const response = await axios.get(`/businesses?category=${category}`)
        setBusinesses(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    

    return( 
    <div className="Restaurants">
        <h2>{category.toUpperCase()}</h2>
       
        <section className="container-grid">
        {businesses.map((business) => (
        <Link key={business.id} to={`/view/games/${restaurant.id}`}>
        <Category   key={business.id}
                    name={business.name}
                    image={business.image}
      /></Link>
        ))}

        </section>
      </div>
  )
}
export default Business;
