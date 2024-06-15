import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className="home-container col">         
     
      <section className="welcome-signin">

       </section> 
       
        <section className="button">
        <Link to={`/categories`}>
        <button>Click Here To Get Started</button>
        </Link>
         </section>

         <section className="style">

         </section>

           
      </div>
  )
}

export default Home