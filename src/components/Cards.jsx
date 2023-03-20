import React from 'react'
import { Card } from 'flowbite-react'
export default function Cards() {
  return (
 <div className="grid grid-cols-3 gap-10 m-20" >
  
    <div className="max-w-sm  ml-16" >
    <Card imgSrc="imgs/gym wear.jpg">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        ACTIVE WEAR
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Buy clothes for Gym 
      </p>
    </Card>
  </div>
  <div className="max-w-sm   ml-16" >
  <Card imgSrc="imgs/gym equipment.jpg">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      GYM EQUIPMENTS
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     Buy Gym Equipments
    </p>
  </Card>
  
</div>
<div className="max-w-sm ml-20" >
    <Card imgSrc="imgs/gym wear.jpg">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        ACTIVE WEAR
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Buy Gym wears
      </p>
    </Card>
  </div>
  </div>
  )
}
