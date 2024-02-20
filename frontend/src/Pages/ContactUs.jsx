import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import Buttons from '../Components/Buttons'

const ContactUs = () => {
  return (
    <Wrapper>

<div className="box">
        <div className="top">
            <div className="first">
            don’t hesitate, get in touch
            </div>
            <div className="second">
            One of our customer service representatives will be happy to assist you.
            </div>
        </div>

        <NavLink to="/contactPage" className="buttonWhite cursor-pointer  hover:-translate-y-1 hover:scale-89  duration-300  ">
                <div className="buttonTextWhite"> Contact Us
                    <div className="svg"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M19.0332 6.66675L28.3665 16.0001L19.0332 25.3334" stroke="#5C27C0" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.3672 16H4.36719" stroke="#5C27C0" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                 {/* <Buttons btn="Prev" width="w-[70%]" />  */}

            </NavLink>


</div>
    </Wrapper>
  )
}

export default ContactUs

const Wrapper =  styled.section`
.box{
    max-width:80%;
    width:100%;
    display: flex;
    justify-content:center;
    ${'' /* text-align:center; */}
flex-direction: column;
align-items: center;
margin: 50px auto;
padding:4rem;

border-radius: 25.806px;
background: var(--rework-prime, #5C27C0);
}
.top{
    display: inline-flex;
flex-direction: column;
align-items: center;
}
.first{
   

    color: var(--White, #FFF);
text-align: center;
${'' /* font-family: Gilroy-Bold; */}
font-family: 'Merriweather', serif;
font-size: 42px;
padding:24px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 110.4px */

}
.second{
    color: var(--White, #FFF);
text-align: center;
font-family: Quicksand;
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 120%; /* 38.4px */
}
.buttonTextWhite{
    background:black;
    display:flex;
    width:100%;
    padding:13px;
    border-radius: 9.6px;
    margin-top: 10px;
}


${'' /* responsive */}

@media screen and (max-width: 985px) {
    .box{
        max-width:92%;
    margin: 50px auto;
    padding:2rem;
  }
}

${'' /* mobl  */}

@media screen and (max-width: 500px) {

}
`