import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.nav`
    display: flex; 
    position: fixed;
    background-color: white;
    border-radius: 8px;
    border: none;
    justify-content: space-around;
    flex-direction: row;
    margin: auto;
   top: 16px;
    @media only screen and (min-width : 480px) {
    width: 80%;
    left: 10%;
    }
    @media only screen and (min-width : 768px) {
    width: 60%;
    left: 20%;
    }
    @media only screen and (min-width : 1000px) {
    width: 40%;
    left: 30%;
    }
    @media only screen and (min-width : 1800px) {
        width: 40%;
    }
`

const Menuitem = styled(Link)`
flex-grow: ${props => props.grow};
    order: ${props => props.order};
    text-align: ${props => props.side};
    width: ${props => props.w};
    padding: 8px 8px 10px 8px;
    border: 0.5px solid #f5f5f5;
    padding-bottom: ${props => props.pb};
    color: black;
    &:hover{
         color: #222;
         background-color: #f5f5f5;
        }
        &:active{
          color: #000;
        }
`

const Header = (props) => {
  return (
    <Head>
      <Menuitem to="/">PRO</Menuitem>
      <Menuitem to="/work">SNAP</Menuitem>
    </Head>
  )
}

export default Header;
