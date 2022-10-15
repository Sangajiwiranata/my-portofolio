import React from 'react'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Cards from '../Experiens/Cards';
import { Container } from 'react-bootstrap';
import { skill } from './skill';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Skills = () => {
    return (
        <div>
            <Container className='mt-5 mb-5' data-aos="fade-down" data-aos-duration="1500" id='skills'>
                <h1 style={{ margin: '40px' }}>SKILLS</h1>
                <Swiper
                    modules={[FreeMode, Navigation]}
                    freeMode={true}
                    grabCursor={true}
                    className='mySwiper'
                    navigation
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 15
                        },
                        992: {
                            slidesPerView: 6,
                            spaceBetween: 30
                        }
                    }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >

                    {skill.map((item, index) => {
                        return (
                            <SwiperSlide key={index} >
                                <img src={item.image} alt="" height={'100px'} />
                                <h4 style={{ marginTop: '20px' }}>{item.name}</h4>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </div>
    )
}

export default Skills
