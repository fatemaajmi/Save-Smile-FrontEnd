import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RatingComponent from '../components/Rating'

const Review = () => {
  const { id } = useParams();
  const [coupon, setCoupon] = useState(null);
  const [form, setForm] = useState({
    userName: '',
    rating: 0,
    comment: '',
  });

  useEffect(() => {
    getCoupon();
  }, [id]);

  const getCoupon = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/coupons/${id}`);
      console.log(response.data);
      setCoupon(response.data);
    } catch (error) {
      console.error('Error fetching coupon:', error);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/reviews/${id}`, form);
      console.log('Review submitted:', response.data);
      // Optionally, you can refresh the coupon details after submission
      getCoupon();
      // Reset the form
      setForm({
        userName: '',
        rating: 0,
        comment: '',
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!coupon) {
    return <div>Loading...</div>;
  }

  return (
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
      <h2>Customer Review</h2>

      <section className="Review-container">
        <div className="Reviewcard">
          <img src={coupon.img} alt={coupon.title} />
          <section>
            <h3>Name: {coupon.title}</h3>
            <p>Discount: {coupon.discount}</p>
            <p>Description: {coupon.description}</p>
          </section>
        </div>
      </section>

      <form className="CouponForm" onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name:</label>
        {/* <input
          id="userName"
          type="text"
          onChange={handleChange}
          value={form.userName}
          required
        /> */}
        <label htmlFor="rating">Rating:</label>
        <RatingComponent
          value={form.rating}
          onChange={(newValue) => setForm({ ...form, rating: newValue })}
        />
        <label htmlFor="comment">Review:</label>
        <textarea
          id="comment"
          onChange={handleChange}
          value={form.comment}
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      {/* Display existing reviews */}
      <div className="Reviews-container">
        <h2>Reviews</h2>
        {coupon.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {coupon.reviews.map((review) => (
              <li key={review._id}>
                <p>User: {review.userName}</p>
                <RatingComponent value={review.rating} readOnly />
                <p>{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Review;
