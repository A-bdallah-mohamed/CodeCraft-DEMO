import React from 'react'
import Website1 from '../websites/website1/website1'
import './platform.css'
import website1image from "../assets/websitesimages/website1.jfif"
export default function Platform() {
  return (
    <div className='platformmainpage'>
        <div className='websiteborder'>
            <div className='websiteimagecontainer'>
   <img className='websiteimage' src={website1image}></img>
   </div>
        </div>
    </div>
  )
}
