import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className="home-container col">         

      <section className="welcome-signin">
      <img className="image" src="https://media.assettype.com/freepressjournal/2023-10/a207d044-c69d-49d6-88cb-1d6f94308161/Student_Discount.png"></img>
      <img className="image2" src="https://ucarecdn.com/b912f51e-5243-454d-901a-991173daf860/"></img>
       </section> <section className="style">
        <section className="Button">
        <Link to={`/categories`}>
        <button className="button">Click Here To Get Started</button>
        </Link>
        <Link to={`/signin`}>
        <button className="button">Sign in</button>
         </Link></section>
         

         </section>

           
      </div>
  )
}

export default Home