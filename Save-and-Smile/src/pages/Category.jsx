import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Category = () => {
  const [businesses, setBusinesses] = useState([])
  const navigate = useNavigate();

  const handleSubmit = async (category) => {
     let response = await axios.get(`/businesses? category = ${category}`)
     setBusinesses(response.data)
     navigate(`${category}`)
  }
  
    return (
      <div className="Category-container col">         
       
       <section className="style">
           </section>

          <section className="cateButton">
          <button onClick={() => handleSubmit("restaurants")}>Restaurants</button>
          <button onClick={() => handleSubmit("cinema")}>Cinema</button>
          <button onClick={() => handleSubmit("shopping-malls")}>Shopping Malls</button>
          </section>

        </div>
    )
  }
  
  export default Category