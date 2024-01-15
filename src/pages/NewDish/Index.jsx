import { api } from "../../services/api"
import { useState } from "react";

import { Container, Content, DishAvatar } from "./styles";

import { Header } from '../../components/Header/Index'
import { Button } from '../../components/Button/Index'
import { Input } from '../../components/Input/Index'
import { IngredientsItems } from '../../components/IngredientsItems/Index'

import { FiUpload } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";

import { Link } from 'react-router-dom'





export function NewDish() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addNewDish() {
        if(!title || !category || !price || !description) {
            alert("Preencha todos os campos para cadastrar um novo prato!")
            return
        }

        console.log(tags)
        
        try {
            await api.post("/menu", { title, description, category, price })
            alert("Prato criado com sucesso!")
        }catch(error) {
            alert("Não foi possível criar o prato")
        }
    }
   

    return(
        <Container>
            <Header />
            
            <Link to="/">
                <MdArrowBackIosNew />
                Voltar
            </Link>   

            <Content>
                

                    <h1>Adicionar Prato</h1>

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
                    onChange={event => setTitle(event.target.value)}
                    />
                    </label>

                    <label htmlFor="Category">Categoria
                    <Input 
                    id="category"
                    onChange={event => setCategory(event.target.value)}
                    />
                    </label>

                </div>

                <div className="rowDesktopTwo">
                    <label htmlFor="">Ingredientes
                    <div className="newTags">
                        <IngredientsItems
                        onChange={event => setTags(event.target.value)}
                        />
                        <IngredientsItems />
                    </div>
                    </label>
                    

                    <label htmlFor="">Preço
                    <Input 
                    placeholder="R$ 00,00"
                    id="price"
                    onChange={event => setPrice(event.target.value)}
                    />
                    </label>
                </div>



                    <label htmlFor="description">Descrição</label>
                    <textarea 
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    id="description" 
                    cols="30" 
                    rows="10"
                    onChange={event => setDescription(event.target.value)}

                    
                    />
                    
                    <div className="saveButton">
                        <Button 
                        isactive
                        title="Salvar alterações"
                        onClick={addNewDish}
                        />
                    </div>
            </Content>
        </Container>
    )
}


                



                        



                    