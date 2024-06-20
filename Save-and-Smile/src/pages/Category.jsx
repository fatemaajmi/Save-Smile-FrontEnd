import { useNavigate } from "react-router-dom"

const Category = () => {
  const navigate = useNavigate();

  const handleSubmit = async (category) => {
     navigate(`${category}`)
  }
  
    return (
      <div className="Category-container">         
          <section className="cateButton">
          <button onClick={() => handleSubmit("restaurant")}>Restaurants<img src="https://themeforest.img.customer.envatousercontent.com/files/490833269/screenshots/02_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=2e4e63a750692b55b7a2c7063b729f7d"></img></button>
          </section> 
          <section className="cateButton2">
          <button onClick={() => handleSubmit("cinema")}>Cinema<img src="https://s3.envato.com/files/230486556/Preview/01_Preview.jpg"></img></button>
          </section>
          <section className="cateButton3">
          <button onClick={() => handleSubmit("shop")}>Shopping Malls<img src ="https://media.architecturaldigest.com/photos/655d0c9272651b6a69b0fa80/16:9/w_2580,c_limit/GettyImages-1316449167.jpg"></img></button>
          </section>
          <section className=""> </section>
        </div>

        
    )
  }
  
  export default Category