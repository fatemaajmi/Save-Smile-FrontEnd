import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Coupon from './Coupon';

const Detail = () => {
    const [coupons, setCoupons] = useState([])
    const { id } = useParams()

    useEffect (() => {
    getCoupons()
    }, [id])

   const getCoupons = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/coupons`)
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
        {coupons.map((coupon) => (
          <div key={coupon._id} className="Detailcard">
            <img src={coupon.img} alt={coupon.name} />
            <h3>Name: {coupon.name}</h3>
            <p>discount: {coupon.discount}</p>
            <p>description: {coupon.description}</p>
            <Link to={`/Review`} ><button>Coupons Purchased</button></Link>
       </div>
        ))}

        </section>
      </div>
  )
}
export default Detail;
