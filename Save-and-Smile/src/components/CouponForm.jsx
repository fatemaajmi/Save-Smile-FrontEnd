import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CouponForm = () => {
  const [coupons, setCoupons] = useState([])
  const { business } = useParams()
  const {id} = useParams()

    useEffect (() => {
    getCoupons()
    }, [business])

   const getCoupons = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/coupons`) // Call on newly created end point
        console.log(response.data);
        setCoupons(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    const initialState = { 
      title: "", 
      discount: 0,  
      description: "",
      img: "",
      business: ""
    }
  
    const [form, setForm] = useState(initialState)
  
    const handleChange = (event) => {
      setForm({ ...form, [event.target.id]: event.target.value });
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
      const response = await axios.post('http://localhost:3000/coupons', form); 
      setForm(initialState);
      } catch (error) {
      console.error('Error creating coupon:', error);
      }
    };
 
  return (
    <form className='CouponForm' onSubmit={handleSubmit}>
      <label htmlFor="title">Coupon Name:</label>
      <input
        id="title"
        type="text"
        onChange={handleChange}
        value={form.name}
      />
      <label htmlFor="discount">Discount (%):</label>
      <input
        id="discount"
        type="number"
        onChange={handleChange}
        value={form.discount}
      />
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        onChange={handleChange}
        value={form.description}
      />
       <label htmlFor="img">Image URL:</label>
      <input
        id="img"
        type="text"
        onChange={handleChange}
        value={form.img}
      />
       <label htmlFor="business">businessId:</label>
       <input id="business" 
       name="business" 
       type="text"
       onChange={handleChange}
       value={form.business} />

      <button type="submit">Add New Coupon</button>
    </form>
  )
};

export default CouponForm ;