import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {

  return (
    <div className='homepage'>
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>CHAT-VEME</h1>
        <h2>Unleash Conversations, Elevate Ideas.</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aspernatur iste enim quaerat reiciendis distinctio laudantium omnis officiis libero ad, obcaecati voluptatem nobis iure, minus vitae voluptate accusamus atque.</h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className='bot' />
        </div>
      </div>
      <div className="terms">
      <img src="/logo.png" alt="" />
      <div className="links">
        <Link to = "/">Terms of Service</Link>
        <span>|</span>
        <Link  to = "/">Privacy Policy</Link>
      </div>
      </div>
    </div>
  )
}

export default Homepage