import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Business = () => {
    const [businesses, setBusinesses] = useState([])
    const {category} = useParams()

    const [editMode, setEditMode] = useState(false)
    const [formButtonText, setFormButtonText] = useState("Add New Business")
    const [editBusinessId, setEditBusinessId] = useState(null)

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
      img: "",
      category: ""
    }
  
    const [form, setForm] = useState(initialState)
  
    const handleChange = (event) => {
      setForm({ ...form, [event.target.id]: event.target.value });
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
      if(editMode){
        await axios.put(`http://localhost:3000/businesses/${editBusinessId}`, form); }
      else {
        await axios.post('http://localhost:3000/businesses', form);
      }
      setForm(initialState);
      setEditMode(false)
      setFormButtonText("Add Business")
      setEditBusinessId(null)
      getBusinesses()
      } catch (error) {
      console.error('Error creating business:', error);
      }
    };

    const handleEdit = (businessId) => {
      const Edit = businesses.find(business => business._id == businessId);
      setForm({
        name: Edit.name,
        location: Edit.location,
        img: Edit.img,
        category: Edit.category,
      });
      setEditMode(true)
      setFormButtonText("Edit Business")
      setEditBusinessId(businessId)
    }

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/businesses/${id}`);
        getBusinesses(); 
      } catch (error) {
        console.error('Error deleting business:', error);
      }
    };
    
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
      <label htmlFor="category">Category:</label>
      <input
        id="category"
        type="text"
        onChange={handleChange}
        value={form.category}
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
            <button onClick={() => handleEdit(business._id)}>Edit</button>
            <button onClick={() => handleDelete(business._id)}>Delete</button>

       </div>
        ))}

        </section>

      
      </div>
  )
}
export default Business;
