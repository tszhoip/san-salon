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
        timeline.to(bannerRef.current, { xPercent: -100, duration: 2 });
        timeline.to(firstRef.current, { yPercent: -100, duration: 1 });
        timeline.to(secondRef.current, { yPercent: -100, duration: 1 });
        timeline.to(thirdRef.current, { yPercent: -100, duration: 1 });
        timeline.to(forthRef.current, { yPercent: -100, duration: 1 });
        timeline.to(fifthRef.current, { yPercent: -100, duration: 1 });
        timeline.to(sixthRef.current, { yPercent: -100, duration: 1 });
        
    }, [timeline]);

    return (
        <div>
            <Banner2 />
            <Banner ref={bannerRef} className="test" />
            <div className="textCrop">
                <h1 ref={titleRef}>annexartdrop</h1>
                <div className="imageContainer">
                   <ImgCrop src="https://images.unsplash.com/photo-1664787812637-150e7d63f68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" ref={firstRef} />
                  
                    <div className="imageCard" ref={secondRef}>
                        <div className="imageCrop">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            />
                        </div>
                    </div>
                    <div className="imageCard" ref={thirdRef}>
                        <div className="imageCrop">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            />
                        </div>
                    </div>
                    <div className="imageCard" ref={forthRef}>
                        <div className="imageCrop">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            />
                        </div>
                    </div>
                    <div className="imageCard" ref={sixthRef}>
                        <div className="imageCrop">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1551913902-c92207136625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <section></section>
        </div>
    );
}

export default Home;
