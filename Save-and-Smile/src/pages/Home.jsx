import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className="home-container col">         

      <section className="welcome-signin">
      <img className="image2" src="https://ucarecdn.com/b912f51e-5243-454d-901a-991173daf860/"></img>
       </section> 
       <section>
        
       </section>
       <section className="style"> </section>
         
          <section className="Button">
        <Link to={`/categories`}>
        <button className="button">Click Here To Get Started</button>
        </Link>

         </section>

           
      </div>
  )
}

export default Home