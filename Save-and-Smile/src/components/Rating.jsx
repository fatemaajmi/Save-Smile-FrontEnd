import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const RatingComponent = ( {onChange} ) => {
  const [value, setValue] = useState(0); // Initial state for user's rating
  const [ratings, setRatings] = useState([]); // State to store fetched ratings
const {id} = useParams()

  useEffect(() => {
    fetchRatings();
  }, [id]); // Fetch ratings whenever couponId changes

  const fetchRatings = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/reviews/coupons/${id}`);
      setRatings(response.data); // Assuming response.data is an array of rating objects
      // Calculate average rating or set initial value based on your logic
      if (response.data.length > 0) {
        const total = response.data.reduce((acc, curr) => acc + curr.value, 0);
        const average = total / response.data.length;
        setValue(average);
      }
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  const handleRatingChange = async (newValue) => {
    try {
      console.log(`new rating value ${newValue}`)
      onChange(newValue)
      // const response = await axios.post(`http://localhost:3000/reviews/${id}`, { value: newValue });
      // console.log('Rating submitted:', response.data);
      // fetchRatings(); // Fetch ratings again after submission to update the UI
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <div>
      {/* Star Rating Display */}
      <Box display="flex" alignItems="center">
        <Rating
          name={`coupon-rating-${id}`}
          value={value}
          precision={0.5}
          onChange={(event, newValue) => handleRatingChange(newValue)}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box ml={2}>
          <Typography variant="subtitle1">
            {value.toFixed(1)} ({ratings.length} reviews)
          </Typography>
        </Box>
      </Box>

      {/* Reviews Display */}
      <Box mt={3} border={1} borderColor="grey.200" p={2} borderRadius={4}>
        <Typography variant="h6">Reviews</Typography>
        {ratings.length === 0 ? (
          <Typography variant="body2">No reviews yet.</Typography>
        ) : (
          ratings.map((rating) => (
            <Box key={rating._id} mt={2}>
              <Typography variant="subtitle2">{rating.userName}</Typography>
              <Rating value={rating.value} precision={0.5} readOnly />
              <Typography variant="body2">{rating.comment}</Typography>
            </Box>
          ))
        )}
      </Box>
    </div>
  );
};

export default RatingComponent;
