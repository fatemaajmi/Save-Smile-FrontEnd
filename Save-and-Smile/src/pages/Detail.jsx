import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = () => {
    const [coupons, setCoupons] = useState([])
    const { id } = useParams()

    useEffect (() => {
    getCoupons()
    }, [id])

   const getCoupons = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/coupons/${id}`)
        console.log(response.data);
        setCoupons(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    return( 
    <div className="Coupons">
        <h2>Coupons Details</h2>
       
        <section className="container-container">
          <div key={coupons._id} className="Detailcard">
            <img src={coupons.img} alt={coupons.title} />
            <h3>Name: {coupons.title}</h3>
            <p>discount: {coupons.discount}</p>
            <p>description: {coupons.description}</p>
            <Link to={`${id}/Review`} ><button>Coupons Purchased</button></Link>
       </div>
        </section>
      </div>
  )
}
export default Detail;
