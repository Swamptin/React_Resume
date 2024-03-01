import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Graduate Diploma in Software Development',
      role: 'University of Limerick',
      test: '2016 - 1st Class Honours',
    },
    {
      id: 2,
      name: 'Music, Media, and Performance Technologies',
      role: 'University of Limerick',
      test: "2010 - 3rd Class Honours",
    },
    {
      id: 3,
      name: 'Developing on AWS',
      role: 'Online',
      test: '04/2021',
    },
    {
      id: 4,
      name: 'ISTQB Certified Tester, Foundation Level',
      role: 'In person test',
      test: "06/2019",
    },
    {
      id: 5,
      name: 'SOC Core Skills - Blackhills Information Security',
      role: 'Online',
      test: "11/2020",
    },
    {
      id: 6,
      name: 'Getting Started in CyberSecurity - Blackhills Information Security',
      role: 'Online',
      test: "01/2020",
    },
  ];
  return (
    <section id="testimonials">
      <h2>Qualifications</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
