import React from 'react'
import logo from '../../assets/footerlogo.png'
import codechef from '../../assets/codechef.png'
import {BiLogoFacebookCircle,BiLogoTwitter,BiLogoLinkedin,BiLogoInstagram} from 'react-icons/bi'
import './footer.css'
const Footer = () => {
  return (
    <div className='main_footer'> 
         <footer className='tophire__footer'>
                <div className='footer_items'>
                       <img src={logo} alt="" />
                       <p>TopHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.</p>
                       <div className="socialIcons">
                            <BiLogoFacebookCircle/>
                            <BiLogoTwitter/>
                            <BiLogoLinkedin/>
                            <BiLogoInstagram/>
                       </div>
                </div>
                <div className='footer_items'>
                      <p>CANDIDATES</p>
                      <ul> 
                          <li><a href="#">For Candidates</a></li>
                          <li><a href="#">Candidate Sign Up</a></li>
                          <li><a href="#">Invite & Earn ₹15k</a></li>
                          <li><a href="#">Candidate FAQ</a></li>
                      </ul>
                </div>
                <div className='footer_items'>
                      <p>EMPLOYERS</p>
                      <ul> 
                          <li><a href="#">For Employers</a></li>
                          <li><a href="#">Employer Sign Up</a></li>
                          <li><a href="#">Employer FAQ</a></li>
                          
                      </ul>
                </div>
                <div className='footer_items'>
                      <p>COMPANY</p>
                      <ul> 
                          <li><a href="#">Careers</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                        
                      </ul>
                </div>
                <div className='footer_items'>
                      <p>PARTNERS</p>
                       <img src={codechef} alt="" />
                 </div>
         </footer>
    </div>
  )
}

export default Footer
