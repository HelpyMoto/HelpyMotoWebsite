import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';


let clients = [
    {
        name: "Hemant Singh",
        position: "Google",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/google.png",
        stars: 3,
        disc: "I was skeptical about using an online car service company, but Helpymoto exceeded my expectations. Their website was easy to navigate and scheduling an appointment was a breeze. The technician quickly diagnosed the issue with my car and had it fixed in no time. I would definitely use this service again."
    },
    {
        name: "Karan Arora",
        position: "Facebook",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/facebook.png",
        stars: 4,
        disc: "After many trials, finally found a great company for car services. The ease that Helpymoto provides is unmatched. Their car spa services are something I would highly recommend."
    },
    {
        name: "Aman Malhotra",
        position: "Twitter",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/twitter.png",
        stars: 5,
        disc: "I was in need to get my car serviced ASAP. I stumbled upon this Helpymoto and was pleasantly surprised by how fast they were. The technician was knowledgeable and friendly, and he had all the necessary tools to fix my car on the spot. The pricing was also very reasonable. I highly recommend this online car service company."
    },
    {
        name: "Navneet Kumar",
        position: "Google",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/google.png",
        stars: 5,
        disc: "Incredibly convenient to use and operate the site. Helped me save so much time."
    },
    {
        name: "Manish Singh",
        position: "Google",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/google.png",
        stars: 4,
        disc: "I was hesitant to try an online car service company, but I'm so glad I did. The technician who serviced my car was a true professional. He explained everything he was doing and made sure I was comfortable with the pricing before starting any work. The service was completed quickly and my car runs great now. I will definitely be using this service again in the future."
    },
    {
        name: "Abhay Rathore",
        position: "Twitter",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/twitter.png",
        stars: 3,
        disc: "I highly recommend Helpymoto car service company to anyone looking for a hassle-free way to maintain their vehicle."
    },
    {
        name: "Riya Sharma",
        position: "Facebook",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/facebook.png",
        stars: 5,
        disc: "I was impressed with the level of service that I received from Helpymoto. The website was easy to use, and I appreciated the ability to view pricing and schedule an appointment online. The service was completed on time, and my car has been running smoothly ever since. I will definitely be using this service again for my future car maintenance needs."
    },
    {
        name: "Soham Goyal",
        position: "Google",
        img_url: "https://gomechprod.blob.core.windows.net/websiteasset/New%20Website/components/Homepage/google.png",
        stars: 4,
        disc: "The entire process was seamless and convenient, from booking the service appointment to receiving my car back in pristine condition. The prices were competitive, and the quality of work was top-notch."
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>What Car Owners Say</h1>
        </Slide>
        
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    height:300px;
    margin-bottom : 320px;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        color: #000000;
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;

`
const Buttons = styled.div`
    position: absolute;
    right: 17rem;
    top : 2680 px;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`