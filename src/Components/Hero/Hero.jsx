import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MyResume from '../../assets/KananGadhia_resume.pdf'

const Hero = () => {
  const openResume = () => {
    window.open(MyResume, '_blank');
  }

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Kanan Gadhia,</span>Web developer based in Ahmedabad</h1>
      <p>Eager to bring extensive experience in software testing,
innovative design, and dynamic development to a progressive
company.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='/contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={openResume}>My Resume</div>

       
      </div>
    </div>
  )
}

export default Hero
