import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Coupon = () => {
    const [editMode, setEditMode] = useState(false)
    const [formButtonText, setFormButtonText] = useState("Add New Coupon")
    const [editCouponId, setEditCouponId] = useState(null)


    const [coupons, setCoupons] = useState([])
    const { business } = useParams()
    const {id} = useParams()

    useEffect (() => {
      getCoupons()
    }, [business])

   const getCoupons = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/coupons/business/${id}`) // Call on newly created end point
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
      business: id
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
      getCoupons()
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

    };

    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3000/coupons/${id}`);
        getCoupons(); 
      } catch (error) {
        console.error('Error deleting coupon:', error);
      }
    };
    

    return( 
    <div className="Coupons">
        <h2>Coupons List</h2>
        <form className='CouponForm' onSubmit={handleSubmit}>
      <label htmlFor="title">Coupon Name:</label>
      <input
        id="title"
        type="text"
        onChange={handleChange}
        value={form.title}
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
       <label htmlFor="business"></label>
       <input id="business" 
       name="business" 
       type="hidden"
       onChange={handleChange}
       value={form.business} />

      <button type="submit">{formButtonText}</button>
    </form>
       
        <section className="container-grid">
        {coupons.map((coupon) => (
          <div key={coupon._id} className="business-card">
            <img src={coupon.img} alt={coupon.title} />
            <h3>Name: {coupon.title}</h3>
            <p>discount: {coupon.discount}</p>
            <Link to={`${coupon._id}/details`} ><button>Coupons Details</button></Link>
            <button onClick={() => handleEdit(coupon._id)}>Edit</button>
            <button onClick={() => handleDelete(coupon._id)}>Delete</button>

       </div>
        ))}

        </section>

      </div>
  )
}
export default Coupon;
