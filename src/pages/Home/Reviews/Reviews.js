import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import 'swiper/components/navigation/navigation.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('https://immense-island-65259.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className="container mx-auto mt-20">
            <h3 className="text-4xl font-bold text-center my-2 p-2">Reviews From Our Great Client</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={swiper => console.log(swiper)}
            >
                {
                    reviews.map(review => <div className=" grid sm:grid-cols-2 lg:grid-cols-4" key={reviews._id}>
                        <SwiperSlide >
                            <div className="m-5 border-2 p-4 h-80 bg-gray-200 rounded">
                                <div className="img p-2 w-2/12 rounded-lg mx-auto">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYUbi-Jf5QxIW-koSAO97ZmKrOXadXeJ3xQ&usqp=CAU" alt="" />
                                </div>
                                <div className="details text-center">
                                    <h2 className="text-3xl my-2 font-semibold">{review.title}</h2>
                                    <p className="text-lg">{review.details}</p>
                                    <h2> <Rating initialRating={review.review} emptySymbol="far fa-star text-yellow-500" fullSymbol="fas fa-star text-yellow-500" />
                                    </h2>
                                    <h2 className="text-xl text-blue-400">-{review.name}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;