import React, {  useRef, useState } from "react";
import { Container } from "react-bootstrap";

function Odometer() {
  
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const refall = useRef();


  window.onscroll=()=>{
const y = window.innerWidth>992? -13:-20;




if(window.scrollY >= (refall.current.offsetTop - window.outerHeight+350)){
  ref.current.style.transform=`translateY(-${ref.current.clientHeight-y}px)`;
  ref2.current.style.transform=`translateY(-${ref.current.clientHeight-y}px)`;
  ref3.current.style.transform=`translateY(-${ref.current.clientHeight-y}px)`;
  
}
else{
  ref.current.style.transform="translateY(0px)";
  ref2.current.style.transform="translateY(0px)";  
  ref3.current.style.transform="translateY(0px)";  
}
  }
  
  return (
    <div className="allcounter"  ref={refall}>
     
      <Container>
<h2>AQuadic In Numbers</h2>
    
    <div className="counter">
      <div className="num1 num">

        <div className="allnum" >
          8
          <div className="numup" ref={ref}>
            <span>8</span>
            <span>5</span>
          </div>
        </div>
        <h3>Project</h3>
        </div>
        <div className="num2 num" >
        <div className="allnum" >
        
          <div className="numup" ref={ref2}>
            <span>88</span>
            <span>50</span>
          </div>
         
        </div>

        <h3>CLIENTS</h3>
        </div>
        <div className="num3 num">
        <div className="allnum" >
        
          <div className="numup" ref={ref3}>
            <span>88</span>
            <span>14</span>
          </div>
        </div>
        <h3>COUNTRIES</h3>
        </div>
    </div>
    </Container>
    </div>
  );
}

export default Odometer;
