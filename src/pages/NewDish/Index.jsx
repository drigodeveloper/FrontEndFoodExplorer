import { Container, Content, DishAvatar } from "./styles";
import { Header } from '../../components/Header/Index'
import { ButtonBack } from '../../components/ButtonBack/Index'
import { Button } from '../../components/Button/Index'
import { Input } from '../../components/Input/Index'
import { IngredientsItems } from '../../components/IngredientsItems/Index'
import { FiUpload } from "react-icons/fi";




export function NewDish() {
    return(
        <Container>
            <Header />
            <ButtonBack />

            <Content>
                

                    <h1>Novo Prato</h1>

                <div className="desktop">

                    <label htmlFor="ImageDish">Imagem do prato
                        <DishAvatar>
                            <div className="photoDish">
                                <FiUpload />
                                <input id="ImageDish" placeholder="Selecione imagem" type="file"/>
                                <span>Selecione imagem</span>
                            </div>
                        </DishAvatar>
                    </label>

                
                    <label htmlFor="Name">Nome
                    <Input 
                    placeholder="Ex.: Salada Ceasar"
                    id="name"
                    />
                    </label>

                    <label htmlFor="Category">Categoria
                    <Input 
                    id="category"
                    />
                    </label>

                </div>

                    <label htmlFor="">Ingredientes</label>
                    <div className="newTags">
                        <IngredientsItems/>
                        <IngredientsItems isNew />
                    </div>
                    

                    <label htmlFor="">Preço</label>
                    <Input 
                    placeholder="R$ 00,00"
                    id="price"
                    />

                    <label htmlFor="description">Descrição</label>
                    <textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    id="description" 
                    cols="30" 
                    rows="10"
                    
                    />

                    <Button 
                    title="Salvar alterações"
                    />
                

            </Content>



        </Container>
    )
}
                        



                    