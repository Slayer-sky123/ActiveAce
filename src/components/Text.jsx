import React from 'react'
import { Link } from 'react-router-dom'
import './Text.css'
export default function Text() {
  return (
    <div>
      <div class="f1" >WORK <em>HARDER</em>,GET STRONGER</div>

      <div class="f2" >EASY WITH OUR <em>GYM</em> </div>

      <div class="f3">
        
        <Link to="/signup">BECOME A MEMBER</Link>
        
        </div>
        <div class="f4">
        DON'T THINK,BEGIN TODAY ON FITNESS JOURNEY WITH OUR BEST COACHES

        </div>
       
    
    </div>
  )
}
