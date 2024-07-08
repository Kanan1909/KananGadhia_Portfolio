import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile2.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Eager to bring extensive experience in software testing,
innovative design, and dynamic development to a progressive
company. Looking to join a forward-thinking team committed to
creating impactful solutions and achieving remarkable growth and
success.</p>
                <p>While passionate about web development, I also
possess strong skills across various IT domains, ready to leverage
my expertise to drive technological advancements and deliver
outstanding results.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML,CSS JS</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>REACT</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>DSA</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JAVA</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>PYTHON</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>DBMS</p><hr style={{width:"87%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2 Months</h1>
            <p>OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8.94 CPI </h1>
            <p>Till semester 6</p>
        </div>
      </div>
    </div>
  )
}

export default About
