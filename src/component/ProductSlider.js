import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "styled-components"

const Keen = styled.div`
@media only screen and (min-width : 300px) {
width: 100vw;
height: 100vw;
    }
    @media only screen and (min-width : 768px) {
      width: 50% ;
      height: 100vh;

    }
    @media only screen and (min-width : 1000px) {
      width: 50% ;
      height: 100vh;
    }
    @media only screen and (min-width : 1600px) {
width: 50% ;
height: 100vh;
    }
` 

const ProductSlider = (props) => {
    const [sliderRef] = useKeenSlider({ loop: true })
    const hasImages = Array.isArray(props.images)
    
return (
  <Keen ref={sliderRef} className="keen-slider">
    {hasImages && props.images.map((imageUrl, index) => 
      <div className="keen-slider__slide" key={index} original={imageUrl}>
        <img src={imageUrl} alt={imageUrl} objfit={props.objfit} />
    </div>)}
  </Keen>
)}

export default ProductSlider;