import React from 'react'
import './herosec.css'
import { featureicon1,featureicon2,featureicon3 } from './import'
const Herosec = () => {
    const cards = [{
         img:featureicon1,
         title:"STEP 1: COMPLETE PROFILE",
         text:"Once you are approved, we showcase you to leading Indian technology startups"
    },
    {
        img:featureicon2,
        title:"STEP 2: RECEIVE JOB OFFERS",
        text:"Companies start sending interview requests. Talk to only the ones you like."
    },
   {
      img:featureicon3,
      title:"STEP 3: ACCEPT DREAM JOB",
      text:"Compare your offers and accept the best one. Hired!"
   }
]
  return (
    <div className='herosec'>
        <div className="hero_section_inner">

                <div className="herosec_content">
               <h1>Find your next top tech job in 1 week.</h1>
               <p> <span className="yellow">Are you a top 2% </span>Software Engineer, Product Manager or Data Scientist?</p>
               <p>  Let leading Indian technology companies <span className='yellow'> compete to hire you.</span></p>
               <button className='applybtn'>Apply to Join</button>
               <p>100% free. It takes only 5 minutes</p>
          </div>
          <div className="herosec_cards flex">
                 {
                     cards.map((item)=>{
                          return(
                             <div className='herosec_item'>
                                 <img src={item.img} alt="" />
                                 <h4>{item.title}</h4>
                                  <p>{item.text}</p>
                             </div>
                          )
                     })
                 }
          </div>
        </div>
      
    </div>
  )
}

export default Herosec
