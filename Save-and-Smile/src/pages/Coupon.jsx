import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Coupon = () => {
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
        <h2>Coupons List</h2>
       
        <section className="container-grid">
        {coupons.map((coupon) => (
          <div key={coupon._id} className="business-card">
            <img src={coupon.img} alt={coupon.name} />
            <h3>Name: {coupon.name}</h3>
            <p>discount: {coupon.discount}</p>
            <p>description: {coupon.description}</p>

       </div>
        ))}

        </section>
      </div>
  )
}
export default Coupon;
