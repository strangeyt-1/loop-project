import React from 'react'
import ball from './Images/footballer.jpeg'
import wallpaper from './Images/iphonewallpaper.jpeg'
import led from './Images/ledstrip.jpeg'
import mobil from './Images/mobil.jpeg'
import mars from './Images/mars.jpeg'
import water from './Images/water.jpeg'
import world from './Images/world.jpeg'
import road from './Images/road.jpeg'
import './Grid.css'

const Grid = () => {
    return (
        <div>
              <div className="grid">
                    <div className="grid1"><img src={world} alt="" /></div>
                    <div className="grid2"><img src={led} alt="" /></div>
                    <div className="grid3"><img src={ball} alt="" /></div>
                    <div className="grid4"><img src={mobil} alt="" /></div>
                    <div className="grid5"><img src={road} alt="" /></div>
                    <div className="grid6"><img src={wallpaper} alt="" /></div>
                    <div className="grid7"><img src={mars} alt="" /></div>
                    <div className="grid8"><img src={water} alt="" /></div>
              </div>
            
        </div>
    )
}

export default Grid
