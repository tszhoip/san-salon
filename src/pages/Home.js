import React from 'react';
import styled from 'styled-components';

const Worklist = styled.div`
width: 100%;
display: grid;
grid-gap: 0px;
overflow: hidden;
@media only screen and (min-width : 280px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 768px) {
  grid-template-columns: repeat(2, 50%);
}
@media only screen and (min-width : 1000px) {
        grid-template-columns: repeat(3, 33.3%);
}
@media only screen and (min-width : 1600px) {
  grid-template-columns: repeat(3, 33.3%);
}
`

function Home() {

  return (
    <div>
     <h1>24334324234235</h1>
    </div>
  );
}

export default Home;
