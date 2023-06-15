import React from 'react';
import ProductSlider from './ProductSlider.js';
import { base } from '../theme';
import styled, { ThemeProvider } from "styled-components";
import d1 from '../assets/product/1.jpg';
import d2 from '../assets/product/2.jpg';
import d3 from '../assets/product/3.jpg';
import d4 from '../assets/product/4.jpg';

const ProductContainer = styled.div`
    display: flex; 
    justify-content: start;

    @media only screen and (min-width : 300px) {
      flex-direction: column;
      height: auto;
      width: 100vw;
    }
    @media only screen and (min-width : 768px) {
      flex-direction: row;
      height: auto;
      width: 100vw;
    }
    @media only screen and (min-width : 1000px) {
      flex-direction: row;
      height: 100vh;
      width: 100vw;
    }
    @media only screen and (min-width : 1600px) {
      flex-direction: row;
      height: 100vh;
      width: 100vw;
    }
`


const images3 = [
  d1,
  d2,
  d3,
  d4
]

const L01 = (props) => {



  return (
    <ThemeProvider theme={base}>
    <ProductContainer>
      <ProductSlider images={images3} objfit="cover" />
      </ProductContainer>
    </ThemeProvider>
  )
}

export default L01;
