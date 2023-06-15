import React from 'react';
import L01 from '../component/L01';
import { PButton } from '../component/Buttons';

function Home() {

    return (
        <div>
         <L01  href="https://buy.stripe.com/test_5kA5okgPOeIlfEkbII" />   
         <PButton width={[2, 2, 2, 2]} cta="Book Appointment"  href="https://san-salon.mailchimpsites.com/"/>  
        </div>
    );
}

export default Home;
