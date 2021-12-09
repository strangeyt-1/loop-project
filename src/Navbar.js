import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
               <h3>loopstudios</h3>
               <div className="navbar-">
                    <a href="https://www.youtube.com/watch?v=pkL4mBW9hwI">About</a>
                    <a href="https://www.youtube.com/watch?v=pkL4mBW9hwI">Careers</a>
                    <a href="https://www.youtube.com/watch?v=pkL4mBW9hwI">Events</a>
                    <a href="https://www.youtube.com/watch?v=pkL4mBW9hwI">Products</a>
                    <a href="https://www.youtube.com/watch?v=pkL4mBW9hwI">Support</a>
               </div>
               <div className='immersive'>
                   <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
               </div>    
            </div>
            
        </div>
    )
}

export default Navbar
