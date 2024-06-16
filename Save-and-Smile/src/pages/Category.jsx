import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Category = () => {
  const [businesses, setBusinesses] = useState([])
  const navigate = useNavigate();

  const handleSubmit = async (category) => {
     let response = await axios.get(`http://localhost:3000/businesses?category=${category}`)
     console.log(response.data);

     setBusinesses(response.data)
     navigate(`${category}`)
  }
  
    return (
      <div className="Category-container col">         
       
       <section className="style">
           </section>

          <section className="cateButton">
          <button onClick={() => handleSubmit("restaurant")}>Restaurants</button>
          <button onClick={() => handleSubmit("cinema")}>Cinema</button>
          <button onClick={() => handleSubmit("shop")}>Shopping Malls</button>
          </section>

        </div>

        
    )
  }
  
  export default Category