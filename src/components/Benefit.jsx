import React from 'react'
import benefit1 from '../assets/benefit1.png'
import benefit2 from '../assets/benefit2.png'
import benefit3 from '../assets/benefit3.png'
import benefit4 from '../assets/benefit4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper'

const listBenefit = [
  {
    image: benefit1,
    title: 'Play to earn',
    content:
      '$MEDUSA Holders can use MEDUSA NFT AI generator for free to create their own characters. They can use those characters to participate in battles and win valuable rewards',
  },
  {
    image: benefit2,
    title: 'Daily USDT reward',
    content:
      'We convert 1.5% of the 3% Buy Tax into $USDT, which is distributed among holders every 24 hours. Besides, 20% of revenue generated from our Multi-AI app Service will be returned to the community',
  },
  {
    image: benefit3,
    title: 'Mint NFT',
    content:
      '$MEDUSA Holders can also get benefits from the full ownership of all NFTs they create, whether they are intended for personal or commercial use',
  },
  {
    image: benefit4,
    title: 'Free unlimited access to our app',
    content:
      '$MEDUSA Holders can use MEDUSA Multi-AI App without paying subscription fee to create incredible arts and voices, which can be shared globally, helping you build a loyal following',
  },
]

const renderListBenefit = () => {
  return listBenefit.map((item, index) => {
    return (
      <div key={index} className="benefit-item">
        <img src={item.image} alt="benefit" />
        <h6 className="mt-4 mb-1">{item.title}</h6>
        <p>{item.content}</p>
      </div>
    )
  })
}

const renderListBenefitTablet = () => {
  return listBenefit.map((item, index) => {
    return (
      <SwiperSlide key={index} className="benefit-item">
        <img src={item.image} alt="benefit" />
        <h6 className="mt-4 mb-1">{item.title}</h6>
        <p>{item.content}</p>
      </SwiperSlide>
    )
  })
}

const Benefit = () => {
  return (
    <div id="benefit" className="benefit container-wrapper flex-col">
      <div className="title">Benefits</div>
      <div className="benefit-list">{renderListBenefit()}</div>
      <Swiper
        slidesPerView={2}
        spaceBetween={24}
        centeredSlides={true}
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="benefit-list-tablet"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {renderListBenefitTablet()}
      </Swiper>
    </div>
  )
}

export default Benefit
