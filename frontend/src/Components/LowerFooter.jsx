import React from 'react';
// import linkedIn from "./images/linkedIn.png";
// import twitter from "./images/twitter.png";
// import youtube from "./images/youtube.png";
// import instagram from "./images/instagram.png";
import { styled } from 'styled-components';

const LowerFooter = () => {
  return (
    <Wrapper>
      <div className="footer w-cover bg-[#5C27C0]">
        <div className="footerIcon flex justify-center items-center   ">
            <img width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRuW1RkwIhotMF8lNc2Vh-3CFWH04DF3bhw&usqp=CAU" alt="linkedIn" />
            {/* <img src=twitter alt="twitter" /> */}
            <img   width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvb_NoVGSCzK_JmC3XQbox_uyzCQQKSZ-iAg&usqp=CAU" alt="youtube" />
            <img  width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK2hWqLB4sI6n8MjeAM7p_n1nkIwRyWomAg&usqp=CAU" alt="instagram" />
        </div>
        <div className="footerNework"> © 2023 Rework.</div>
      </div>
    </Wrapper>
  )
}

export default LowerFooter
const Wrapper = styled.section`
    .footer{
        padding:2rem 12rem;
        max-width: 100%;
        width:100%;
        display:flex;
        justify-content:space-between;

        background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), var(--rework-prime, #5C27C0);
    }

    .footerIcon img{    
        margin:1px 4px;

    }
    .footerNework{
        color:  #FFF;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;

opacity: 0.7;

text-align: center;
    align-items: center;
    display: flex;
    }


    ${'' /* responsive  */}

    @media screen and (max-width: 1000px) {
        .footer{
            padding: 2rem 5rem;
        }
        .footerIcon img {
    margin: 1px 4px;
    width: 23px;
}
    }





    ${'' /* mbel  */}
    @media screen and (max-width: 500px) {
        .footer{
            padding: 2rem 1.5rem
    }
    }
`