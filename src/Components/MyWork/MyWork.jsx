import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import { useState } from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import MyResume from '../../assets/KananGadhia_resume.pdf'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const MyWork = () => {

  const openResume = () => {
    window.open(MyResume, '_blank');
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };



  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className={`mywork-container ${selectedImage ? 'blur' : ''}`}>
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" onClick={() => handleImageClick(work.w_img)}  />
        })}
      </div>
      <div className="mywork-showmore" onClick={openResume}>
        <p >The complete project links are mentioned in my resume, so please do go through it. <MdOutlineKeyboardDoubleArrowRight className='arrowed'/><MdOutlineKeyboardDoubleArrowRight className='arrowed2'/></p>
        {/* <img src={arrow_icon} alt="" className='arrowed'/> */}
      </div>

{selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           
           <div className='msg'> click anywhere to exit</div>
             <img src={selectedImage} alt="Selected work" />
          </div>
        </div>
      )}


    </div>
  )
}

export default MyWork
