import { useNavigate } from "react-router-dom"

const Category = () => {
  const navigate = useNavigate();

  const handleSubmit = async (category) => {
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