import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import LowerFooter from "./LowerFooter";
// import reworkLogo from "./images/rework.png";

// import partnerIcon1 from "./images/partnerIcon1.png";
// import partnerIcon2 from "./images/partnerIcon2.png";
// import partnerIcon3 from "./images/partnerIcon3.png";
// import partnerIcon4 from "./images/partnerIcon4.png";
// import partnerIcon5 from "./images/partnerIcon5.png";
// import partnerIcon6 from "./images/partnerIcon6.png";

const Footer = () => {
    return (
        <Wrapper>
            <div className="main">
                <div className="footer">
                    <div className="first">
                        {" "}
                        {/* <img src={reworkLogo} alt="Logo" /> */}
                            <p className="span1" style={{marginBottom:"2rem", fontFamily:"cursive"}}>Transaction System</p>
                        <p className="span1">This is a Simple Banking System App</p> <br />
                        <p className="span2">
                            You Can Create an Account and Transfer Money.
                        </p>
                    </div>

                    <div className="firstDiv">
                        <div className="second">
                            <div className="head">Quick Links</div>
                            <NavLink to="/userDetail" className="hover:text-black">Create Account </NavLink>
                            <NavLink to="/customers" className="hover:text-black"  >Customers</NavLink>
                            <NavLink to="/contactPage" className="hover:text-black"  > Contact Us </NavLink>
                        </div>
                        <div className="second">
                            <div className="head">Resources</div>
                            <div className="inner1">Privacy Policy</div>
                            <div className="inner1">Data Protection</div>
                            <div className="inner1"> Terms and Conditions </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="recruiters">For Customers</div>
                        <hr className="hr" />
                        <div className="employees">For employers</div>

                        <div className="partnerDiv">
                            <div className="partner">Technology Partners</div>
                            <div className="partnerIconOne">
                                <img className="img2" width="20px" height="20px" src="https://static.vecteezy.com/system/resources/thumbnails/013/948/616/small/bank-icon-logo-design-vector.jpg" alt="partnerIcon2" />
                               
                                <img className="img2"  width="20px"  height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKb9iwKFkvoFQUjuzaiwdEjj2hHq1OmxdEg&usqp=CAU" alt="partnerIcon3" />
                            </div>
                            {/* <div className="partnerIconOne">
                                <img className="img2" src={partnerIcon4} alt="partnerIcon4" />
                                <img className="img1" src={partnerIcon6} alt="partnerIcon6" />
                                <img className="img2" src={partnerIcon5} alt="partnerIcon5" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
           {/* <LowerFooter /> */}

        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.section`

.main{
    background: var(--rework-prime, #5C27C0);
    margin:2rem 0rem 0rem 0rem; 
    ${"" /* display:flex; */}
    ${"" /* flex-direction:column; */}
}
.footer{
    max-width:80%;
    width:100%;
    margin:auto;
    display:flex;
    gap:5rem;
    padding:3rem 0rem;
    ${"" /* flex-wrap:wrap; */}

}
.firstDiv{
    display:flex;
    gap:2rem;
    width:100%;
}

.first , .second , .third , .fourth{
    width:100%;
}
.second{
    display: flex;
flex-direction: column;
align-items: flex-start;
gap: 21.333px;
}

.first img{
    width: 344.556px;
height: 106.667px;
flex-shrink: 0;
${"" /* width:100%; */}
}


.span1{
    color: var(--White, #FFF);
font-family: Gilroy-Bold;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 120%; /* 33.6px */
}
.span2{
   
    color: var(--White, #FFF);
font-family: Gilroy-Medium;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: 130%; /* 36.4px */
}
.head{
    color: var(--White, #FFF);
font-family: Actor;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: normal;

padding:1rem 0px 0px 0px;
}
.inner1{
    color: var(--White, #FFF);
font-family: Gilroy-Regular;
${"" /* font-size: 20px; */}
font-style: normal;
font-weight: 400;
line-height: normal;


}
.recruiters{
    color: var(--White, #FFF);
font-family: Gilroy-Medium;
font-size: 22px;
font-style: normal;
font-weight: 400;

padding:1rem 0px 0px 0px;

}

.hr {
    width: 55%;
}

.employees{
    color: var(--White, #FFF);
font-family: Gilroy-Medium;
font-size: 22px;
font-style: normal;
font-weight: 400;
}

.partnerDiv{
    
}
.partner{
    color: var(--White, #FFF);
font-family: Actor;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding:1rem 0px;
}

.partnerIconOne {
    text-align: center;
    align-items: center;
    display: flex;

    ${"" /* justify-content: center; */}
    padding:3px 0px;
    gap: 12px;
}
.partnerIconOne .img1{
    margin: 0px 3px 0px 3px;
    width: 25%;
}

.partnerIconOne .img2{
    margin: 0px 3px 0px 3px;
    width: 17%;
}


${"" /* responsive */}

@media screen and (max-width: 1120px) {
    .footer{
        gap:3rem;
    }
    .footer {
    max-width: 87%;
    }
    .head {
    font-size: 24px;
    }
    .inner1{
        font-size: 15px;
    }
    .first img {
    width: 320.556px;
    height: 95.667px;
    }
    .span1 {
    font-size: 19px;}
    .span2 {
    font-size: 19px;}
    .employees {
    font-size: 18px;}
    .partner{
    font-size: 18px;}

}

@media screen and (max-width: 905px) {
    .footer{
        gap:2rem;
    }
    .footer {
    max-width: 89%;
    }
    .head {
    font-size: 23px;
    }
    .inner1{
        font-size: 14px;
    }
    .first img {
    width: 310.556px;
    height: 90.667px;
    }
    .span1 {
    font-size: 17px;}
    .span2 {
    font-size: 17px;}
    .employees {
    font-size: 17px;}
    .partner{
    font-size: 17px;}

}


@media screen and (max-width: 880px) {
    .footer{
        gap:1.2rem;
    }
    .footer {
    max-width: 94%;
    }

}

@media screen and (max-width: 800px) {
   

    .footer{
        gap:1rem;
    max-width: 97%;
    }
    .head {
    font-size: 20px;
    }
    .inner1{
        font-size: 12px;
    }
    .first img {
    width: 300.556px;
    height: 85.667px;
    }
    .span1 {
    font-size: 14px;}
    .span2 {
    font-size: 14px;}
    .employees {
    font-size: 14px;}
    .partner{
    font-size: 14px;}

}

@media screen and (max-width: 730px) {
   

   .footer{
       gap:.6rem;
   max-width: 97%;
   }
   .first img {
    width: 284.556px;
    height: 74.667px;}
}



${"" /* mble */}

@media screen and (max-width: 500px) {
    .main{
    }

    .footer{
        display:flex;
        flex-direction:column;
        margin:auto;
        justify-content:center;
        align-items:center;
        text-align:center;
    }
    .first{
        max-width:80%;
        width:100%;
    }
    .first img{
        width:92%; 
        height:92%; 
    }
    .first .span1 ,  .first .span2{
            font-size:18px; 
    }

    .firstDiv{
        display:flex;
        justify-content:space-between ;
        max-width:80%;
        width:100%;
        margin:auto;
        padding:4rem 0px;

        width: 100%;
    display: flex;
    gap: 2rem;
}
    

    .firstDiv .second{
        margin:auto;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        font-size:24px;
    }
    .firstDiv .second .inner1{
        font-size:15px;
    }
    .second{
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
    }

    .recruiters{
        font-size:24px; 
    }
    .employees{
            font-size:24px; 
    }
    .partner{
        font-size:22px; 
        padding:4rem 0px 1px 0px;
    }
    .partnerIconOne{
        max-width:70%;
        width:100%;
        display:flex;
        justify-content:space-between ;
        margin:auto;
    }
}
   


`;
