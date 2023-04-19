import React from 'react'
import './Cards.css'
export default function Cards() {
  return (
 <div className="grid grid-cols-4 gap-10 m-10" >
  <div class="p1">
<img src="./imgs/max1.jpeg"></img>
<h1>CrossFit</h1>
  </div>
  <div>
<img src="./imgs/max2.jpeg"></img>
<h1>Weight loss</h1>
  </div>
  <div>
<img src="./imgs/max3.jpeg"></img>
<h1>Muscle Building</h1>
  </div>

  <div>
<img src="./imgs/max4.jpeg"></img>
<h1>Zumba classes</h1>
  </div>

   </div>
  
  )
}
