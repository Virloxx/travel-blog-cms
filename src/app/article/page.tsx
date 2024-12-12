'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { images } from '../../../lib/images'
import Footer from '../../components/footer/footer'
import Editor from '../../components/editor/editor'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import React from 'react'

function page() {
  return (
    <div>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className="swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Footer></Footer>
    </div>
  )
}

export default page