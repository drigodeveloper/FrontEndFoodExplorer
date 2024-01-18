import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { Container, Content, GridTags, Account } from './styles'

import { Header } from '../../components/Header/Index'
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button/Index'
import { Tags } from '../../components/Tags/Index'
import { Footer } from '../../components/Footer/Index'

import Maskgroup from '../../assets/Mask group-2.png'

import { PiReceipt } from 'react-icons/pi'
import { MdArrowBackIosNew } from "react-icons/md";


export function Details() {

  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchInfoDishes() {
      const response = await api.get(`/menu/${params.id}`)
      console.log(response)
      setData(response.data)
    }

    fetchInfoDishes()
  }, [params.id])

  return (
   <Container>

    <Header/>

    <Link to="/">
      <MdArrowBackIosNew />
      Voltar
    </Link>      

    {
      data && 
    <Content>

      <img src={Maskgroup} alt="" />

      <div className="dishDescription">
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        <GridTags>
          {data.tags &&
            data.tags.map((tag, index) => (
              <Tags key={index} title={tag.name} />
            ))
          }
        </GridTags>

        <Account>
          <Counter />
          <Button 
            icon={PiReceipt}
            title="Pedir"
          />
        </Account>
      </div>

    </Content>
    }

    <Footer/>

   </Container>
  )
}
