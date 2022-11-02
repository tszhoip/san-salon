import React, { useEffect, useRef } from "react";
import styled from 'styled-components';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = styled.div`
width:100vw;
height:100vh;
min-height: 700px;
background-image: url(https://sansalon.files.wordpress.com/2017/05/28e697b6e5b09ae5a686e5aeb9a41.jpg?w=1104);
background-size: cover;
background-position:center;
`
const Banner2 = styled.div`
width:100vw;
height:100vh;
min-height: 700px;
background-image: url(https://sansalon.files.wordpress.com/2017/05/28e697b6e5b09ae5a686e5aeb9a41.jpg?w=1104);
background-size: cover;
background-position:center;
`
const ImgCrop = styled.img`
width: fit-content;
height: 100%;
overflow: hidden;
border-radius: 0.75rem;
object-fit: contain;
padding: 5vw;
`
const ImgGroup = styled.div`
display: flex;
width: 100%;
justify-content: space-around;

`



function Home() {

    let firstRef = useRef(null);
    let secondRef = useRef(null);
    let thirdRef = useRef(null);
    let forthRef = useRef(null);
    let fifthRef = useRef(null);
    let sixthRef = useRef(null);
    let titleRef = useRef(null);
    let bannerRef = useRef(null);

    var timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger",
            start: "top",
            end: "50%",
            scrub: true
        }
    });


    useEffect(() => {
        timeline.to(bannerRef.current, { yPercent: -50, duration: 10 }, "");
        timeline.to(firstRef.current, { yPercent: -200, duration: 1 });
        timeline.to(secondRef.current, { yPercent: -200, duration: 1 });
        timeline.to(thirdRef.current, { yPercent: -200, duration: 4 });
        timeline.to(forthRef.current, { yPercent: -200, duration: 3 });
        timeline.to(fifthRef.current, { yPercent: -200, duration: 2 });
        timeline.to(sixthRef.current, { yPercent: -200, duration: 1 });

    }, [timeline]);

    return (
        <div>
            <Banner ref={bannerRef} className="test" />
            <ImgGroup>
                <ImgCrop src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" ref={firstRef} />
                <ImgCrop src="https://images.unsplash.com/photo-1664787812637-150e7d63f68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ref={secondRef} />
            </ImgGroup>
            <ImgGroup>
                <ImgCrop src="https://images.unsplash.com/photo-1664787812637-150e7d63f68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ref={thirdRef} />
                <ImgCrop src="https://images.unsplash.com/photo-1664787812637-150e7d63f68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ref={forthRef} />
            </ImgGroup>
            <ImgGroup>
                <ImgCrop src="https://images.unsplash.com/photo-1664787812637-150e7d63f68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ref={fifthRef} />
                <ImgCrop src="https://images.unsplash.com/photo-1664787812637-150e7d63f68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ref={sixthRef} />
            </ImgGroup>
        </div>
    );
}

export default Home;
