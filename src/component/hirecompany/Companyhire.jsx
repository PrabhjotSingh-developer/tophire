import React from 'react'
import {work1,work2,work3,work4,work5} from './import'

import './companyhire.css'
const data = [
  {

    workhead: "Create your free candidate profile",
    para: "Answer a few questions about yourself - it takes less than 5 minutes.",
    lists: "‍🏅 What is your biggest achievement?",
    lists1: "👑️ What does your ideal opportunity look like?",
    img: work1
  },
  {
    workhead: "Sit back while companies compete to hire you",
    para: "Don’t waste your time reaching out to companies or dealing with recruiters.",
    lists: "💨 We fast-track your profile to hiring managers.",
    lists1: "🙆‍♂️ Get multiple interview requests with upfront salary offers within days.",
    img: work2
  }

]
const data1 = [
  {
    workhead: "Salary & Role transparency",
    para: "Interview requests from companies mention salary and role details upfront - before you decide to accept or decline them.",
    img: work3
  },
  {
    workhead: "A dedicated talent advocate",
    para: "Your Talent Advocate will guide you through the entire process. From polishing your profile, providing interview tips to helping negotiate offers!",
    img: work4
  },
  {
    workhead: "Current and past employers can’t see your profile",
    para: "By default, we hide your profile from any employers that you list as your current and past employer.",
    img: work5,
    xyz: true
  }
]
const Companyhire = () => {
  return (
    <div className='main_company_work'>
      <h2 >HOW IT WORKS</h2>
      {

        data.map((item) => {
          return (
            <div className="how_company__work">
              <div className="company_header-content">
                <div className="above_line"></div>
                <h1>{item.workhead}</h1>
                <p>{item.para}</p>
                <ul>
                  <li>{item.lists}</li>
                  <li>{item.lists1}</li>
                </ul>
              </div>
              <div className="work_img">

                <img src={item.img} alt="" />
              </div>
            </div>
          )
        })

      }
      {
        data1.map((item) => {
          return (
            <div className="how_company__work">
              <div className="company_header-content">
                <div className="above_line"></div>
                <h1>{item.workhead}</h1>
                <p>{item.para}</p>
                {item.xyz &&
                  
                  <p>‍🕵 Privacy Assured</p>
              
                }
                
              </div>
              <div className="work_img">
                <img src={item.img} alt="" />
              </div>
            </div>
          )
        })
      }


    </div>
  )
}

export default Companyhire
