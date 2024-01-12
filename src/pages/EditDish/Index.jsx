import { Container, Content, DishAvatar } from "./styles";
import { AdiminHeader } from '../../components/AdiminHeader/Index'
import { Footer } from '../../components/Footer/Index'
import { Button } from '../../components/Button/Index'
import { Input } from '../../components/Input/Index'
import { IngredientsItems } from '../../components/IngredientsItems/Index'
import { FiUpload } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'


export function EditDish() {
    return(
        <Container>
            <AdiminHeader />

            <Link to="/">
                <MdArrowBackIosNew />
                Voltar
            </Link>     

            <Content>
                

                    <h1>Editar prato</h1>

                <div className="rowDesktopOne">

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

                <div className="rowDesktopTwo">
                    <label htmlFor="">Ingredientes
                    <div className="newTags">
                        <IngredientsItems/>
                        <IngredientsItems isNew />
                    </div>
                    </label>
                    

                    <label htmlFor="">Preço
                    <Input 
                    placeholder="R$ 00,00"
                    id="price"
                    />
                    </label>
                </div>



                    <label htmlFor="description">Descrição</label>
                    <textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    id="description" 
                    cols="30" 
                    rows="10"
                    
                    />
                    
                    <div className="saveButton">
                        <button className="deleteButton">
                            Excluir prato
                        </button>
                        <Button 
                        isactive
                        title="Salvar alterações"
                        />
                    </div>
            </Content>

            <Footer />
        </Container>
    )
}


                



                        



                    