import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.nav`
    display: flex; 
    // position: fixed;
    // background-color: white;
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
    @media only screen and (min-width : 480px) {
    width: 50%;
    }
    @media only screen and (min-width : 768px) {
    width: 50%;
    }
    @media only screen and (min-width : 1000px) {
    width: 50%;
    }
    @media only screen and (min-width : 1800px) {
    max-width: 1800px;
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
      <Menuitem to="/">home</Menuitem>
      <Menuitem to="/work">Work</Menuitem>
    </Head>
  )
}

export default Header;
