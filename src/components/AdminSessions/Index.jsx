import { useState, useEffect } from 'react'
import { Container } from "./styles";
import { AdminDishBox } from "../AdminDishBox/Index";

import { Swiper, SwiperSlide } from 'swiper/react';



export function AdminSessions({title, children}) {
    const [slidePreview, setslidePreview] = useState(1.5);


    const data = [
        {id: "1", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>},
        {id: "2", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>},
        {id: "3", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>},
        {id: "4", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>},
        {id: "5", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>},
        {id: "6", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>},
        {id: "7", box: <AdminDishBox title="Salada Ravanello >" price="49,97"/>}
    ]

    useEffect(()=> {
        function handleResize() {
            if(window.innerWidth > 768) {
                setslidePreview(3.2);
            }else {
                setslidePreview(1.5);

            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    
    return(
        <Container>
            <h1>{title}</h1>
            <Swiper
            slidesPerView={slidePreview}
            pagination={{clickable: true}}
            navigation
            >
                
                {data.map((item) => (
                <SwiperSlide key={item.id}>
                    {item.box}
                </SwiperSlide>
                ))}
            </Swiper>


        </Container>
    )
}
            