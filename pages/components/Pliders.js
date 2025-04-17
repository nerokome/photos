import React, {useState } from 'react'
import {SliderData} from './SliderData'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Pliders = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide =() =>{
    setCurrent(current === length -1 ? 0 : current +1)
}
const previousSlide =() =>{
    setCurrent(current === 0 ? length -1  : current -1)
}
if (!Array.isArray(slides) || slides.length <=0) {
    return null;
}
  return (
    <div>
      <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center'>Gallery</h1>
      <div className='relative flex justify-center p-4'>
      
      {SliderData.map((slide, index) => {
           return (
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' :
             'opacity-0'}>
              
              <FaArrowAltCircleLeft
              onClick={previousSlide}
               className='absolute top-[50%] left-[30px]
                 text-white/60 cursor-pointer
                  select-none z-[2]' size={50}/>
                {index === current &&(
                     <img
                     src={slide.Image}
                     alt='/' width= '1440'
                     height= '600'
                     objectFit='cover'/>
                )}
                 <FaArrowAltCircleRight
                 onClick={nextSlide}
                  className='absolute top-[50%] right-[30px]
                 text-white/60 cursor-pointer
                  select-none z-[2]' size={50}/>
            

              </div>
               
                
            
            
           );
          })}
          </div>
      </div>
      
    </div>
  
  );
};

export default Pliders
