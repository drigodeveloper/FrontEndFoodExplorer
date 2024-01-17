import { useState, useEffect } from 'react'
import { api } from "../../services/api"

import { Container } from "./styles";
import { DishBox } from "../DishBox/Index";

import { Swiper, SwiperSlide } from 'swiper/react';

export function Sessions({ title, children }) {
  const [slidePreview, setslidePreview] = useState(1.5);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get("/menu");
        setDishes(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error);
      }
    }

    function handleResize() {
      if (window.innerWidth > 768) {
        setslidePreview(3.5);
      } else {
        setslidePreview(1.5);
      }
    }

    fetchDishes();
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Container>
      <h1>{title}</h1>
      <Swiper
        slidesPerView={slidePreview}
        pagination={{ clickable: true }}
        navigation
      >
        {dishes?.map(item => (
          <SwiperSlide key={item.id}>
            {item.box}
          </SwiperSlide>
        ))}
      </Swiper>
      {children}
    </Container>
  )
}
