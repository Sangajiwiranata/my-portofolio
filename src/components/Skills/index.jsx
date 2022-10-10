import React from 'react'
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Cards from '../Experiens/Cards';
import { Container } from 'react-bootstrap';
import { skill } from './skill';

const Skills = () => {
    return (
        <div>
            <Container className='mt-5 mb-5'>
                <h1 style={{ margin: '40px' }}>SKILLS</h1>
                <Swiper
                    modules={[FreeMode, Navigation, Pagination]}
                    freeMode={true}
                    grabCursor={true}
                    className='mySwiper'
                    navigation
                    pagination={{ clickable: true }}
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
                            <SwiperSlide key={index}>
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
