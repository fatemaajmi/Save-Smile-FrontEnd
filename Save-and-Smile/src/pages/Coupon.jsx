import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Coupon = () => {
    const [coupons, setCoupons] = useState([])
    const { businessId } = useParams()

    useEffect (() => {
    getCoupons()
    }, [businessId])

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
        <h2>Coupons List</h2>
       
        <section className="container-grid">
        {coupons.map((coupon) => (
          <div key={coupon._id} className="business-card">
            <img src={coupon.img} alt={coupon.title} />
            <h3>Name: {coupon.title}</h3>
            <p>discount: {coupon.discount}</p>
            <Link to={`${coupon._id}/details`} ><button>Coupons Details</button></Link>
       </div>
        ))}

        </section>
      </div>
  )
}
export default Coupon;
