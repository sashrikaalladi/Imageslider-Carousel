/*eslint-disable*/
import React,{useState}from 'react'
import './Carousel.css'
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs";
;

const Carousel = (props) => {
  const [slide,setSlide]=useState(0); 
 
  const nextslide=()=>{
  setSlide(slide===props.data.slides.length-1 ? 0:slide+1)
  }
  const previousslide=()=>{
  setSlide(slide=== 0? props.data.slides.length-1 :slide-1)
  }


  return <div className='carousel'>
    <BsFillArrowLeftCircleFill className='arrow arrow-left'onClick={previousslide}/>
    {props.data.slides&&props.data.slides.map((item,index)=>{
          return <div><img src={item.src} alt={item.alt} key={index} className={slide ===index ? "slides":" slides slides-hidden"}/></div>
  })}
  <BsFillArrowRightCircleFill className='arrow arrow-right'onClick={nextslide}/>
  <span className='indicators'>
    {
        props.data.slides.map((_,indx)=>{
            return <button key={indx} onClick={()=>setSlide(indx)} className={slide === indx ? "indicator":"indicator indicator-inactive"}></button>
        })
    }
  </span>
  </div>
  
}

export default Carousel