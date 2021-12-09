import React from 'react'
import './Vrman.css'
import images from './Images/virtual.jpeg'

const Vrman = () => {
    return (
        <div className="MAN">
          <div className="shekau">  
                <div className="vrman">
                    <img src={images} alt="" />
                </div>
                    <div className="leader">
                        <h1>THE LEADER IN<br/>INTERACTIVE VR</h1>
                        <p>
                        Google LLC is an American multinational technology <br/>company that specializes in Internet-related services<br/>
                        and products,which include online advertising<br/> technologies, a search engine, cloud computing, software,
                        and hardware.
                        </p>
                    </div>    
          </div>
          <div className="our">
              <h1>OUR CREATIONS</h1>
              <button type="button" className="btn">See All</button>
          </div>
            
            
        </div>
    )
}

export default Vrman
