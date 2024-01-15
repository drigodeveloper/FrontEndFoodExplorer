import { Container, Content, GridTags, Account } from './styles'
import { Header } from '../../components/Header/Index'
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button/Index'
import { Tags } from '../../components/Tags/Index'
import { Footer } from '../../components/Footer/Index'
import Maskgroup from '../../assets/Mask group-2.png'
import { PiReceipt } from 'react-icons/pi'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'





export function Details() {

  return (
   <Container>

    <Header/>

    <Link to="/">
      <MdArrowBackIosNew />
      Voltar
    </Link>      


    <Content>

      <img src={Maskgroup} alt="" />

      <div className="dishDescription">
        <h1>Salada Ravanello</h1>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

        <GridTags>
      <Tags 
      title="alface"
      />

      <Tags 
      title="Cebola"
      />

      <Tags 
      title="pão naan"
      />
      
      <Tags 
      title="pepino"
      />

      <Tags 
      title="rabanete"
      />

      <Tags 
      title="tomate"
      />
      
        </GridTags>

      <Account>
        <Counter />
        <Button 
        icon={PiReceipt}
        title="pedir ∙ R$ 25,00"/>

      </Account>
      </div>


    </Content>



      <Footer/>

     








   </Container>
  )
}

