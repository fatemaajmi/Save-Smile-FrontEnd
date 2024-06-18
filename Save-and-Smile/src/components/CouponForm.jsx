import React, { useState } from 'react';
import axios from 'axios';

const CouponForm = () => {
  const initialState = { 
    title: "", 
    discount: 0,  
    description: "",
    img: "",
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
      <label htmlFor="description">description:</label>
      <input
        id="description"
        type="text"
        onChange={handleChange}
        value={form.description}
      />
      <label htmlFor="img">image URL:</label>
      <input
        id="img"
        type="text"
        onChange={handleChange}
        value={form.img}
      />
      <button type="submit">New Coupon</button>
    </form>
  );
};

export default CouponForm ;