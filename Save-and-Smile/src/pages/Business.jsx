import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Business = () => {
    const [businesses, setBusinesses] = useState([])
    const {category} = useParams()

    const [editMode, setEditMode] = useState(false)
    const [formButtonText, setFormButtonText] = useState("Add New Business")
    const [editCouponId, setEditCouponId] = useState(null)

    const { business } = useParams()
    const {id} = useParams()

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
    const initialState = { 
      name: "", 
      location: "",
      img: ""
    }
  
    const [form, setForm] = useState(initialState)
  
    const handleChange = (event) => {
      setForm({ ...form, [event.target.id]: event.target.value });
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
      if(editMode){
        await axios.put(`http://localhost:3000/coupons/${editCouponId}`, form); }
      else {
        await axios.post('http://localhost:3000/coupons', form);
      }
      setForm(initialState);
      setEditMode(false)
      setFormButtonText("Add Coupon")
      setEditCouponId(null)
      } catch (error) {
      console.error('Error creating coupon:', error);
      }
    };

    const handleEdit = (couponId) => {
      const Edit = coupons.find(coupon => coupon._id == couponId);
      setForm({
        title: Edit.title,
        discount: Edit.discount,
        description: Edit.description,
        img: Edit.img,
        business: Edit.business,
      });
      setEditMode(true)
      setFormButtonText("Edit Coupon")
      setEditCouponId(couponId)
    }
    
    return( 

    <div className="Restaurants">
        <h2>{category} List</h2>

      <form className='BusinessForm' onSubmit={handleSubmit}>
      <label htmlFor="name">Business Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={form.name}
      />
      <label htmlFor="location">Location (%):</label>
      <input
        id="location"
        type="text"
        onChange={handleChange}
        value={form.location}
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
       <label htmlFor="business"></label>
       <input id="business" 
       name="business" 
       type="hidden"
       onChange={handleChange}
       value={form.business} />

      <button type="submit">{formButtonText}</button>
    </form>

        <section className="container-grid">
        {businesses.map((business) => (
          <div key={business._id} className="business-card">
            <img src={business.img} alt={business.name} />
            <h3>Name: {business.name}</h3>
            <p>Location: {business.location}</p>
            <Link to={`/categories/${category}/${business._id}/coupons`} ><button>Coupons Available</button></Link>
            <button onClick={() => handleDelete(category._id)}>Delete</button>

       </div>
        ))}

        </section>

      
      </div>
  )
}
export default Business;
