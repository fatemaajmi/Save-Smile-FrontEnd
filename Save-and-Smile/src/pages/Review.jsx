import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Review = () => {
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
      const response = await axios.post(`http://localhost:3000/coupons/${id}`, form); 
      setForm(initialState);
      } catch (error) {
      console.error('Error creating coupon:', error);
      }
    };

    return( 
    <div className="Coupons">
        <h2>Customer Review</h2>
       
        <section className="Review-container">
          <div key={coupons._id} className="Reviewcard">
          <img src={coupons.img} alt={coupons.title} />
            <section><h3>Name: {coupons.title}</h3>
            <p>discount: {coupons.discount}</p>
            <p>description: {coupons.description}</p></section>
          
       </div>
        
        </section>

      <form className='CouponForm' onSubmit={handleSubmit}>
      <label htmlFor="title">User Name:</label>
      <input
        id="title"
        type="text"
        onChange={handleChange}
        value={form.name}
      />
      <label htmlFor="discount">Ratings:</label>
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
      <button type="submit">Submit Review</button>
    </form>
      </div>
  )
}
export default Review;
