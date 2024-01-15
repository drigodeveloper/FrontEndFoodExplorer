import { Container, Content, CardRequest } from "./styles";

import { RequestHeader } from "../../components/RequestHeader";
import { Footer } from '../../components/Footer';

import maskGroup from '../../assets/Mask group-2.png';

export function Favorites() {

    return(
        <Container>
            <RequestHeader />

            <h1>Meus favoritos</h1>
            <Content>

            <CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest>
            <CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest>
            <CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest><CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest><CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest><CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest><CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest><CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest><CardRequest>
                <div className="img">
                    <img src={maskGroup} alt="" />
                </div>

                <div className="descriptionDish">
                    <h1>Salada Radish</h1>
                    <a href="">Remover dos Favoritos</a>
                </div>

            </CardRequest>


            

            </Content>

            <Footer/>



        </Container>
    )
}


                



                        



                    