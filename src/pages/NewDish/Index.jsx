import { api } from "../../services/api"

import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'


import { Container, Content, DishAvatar } from "./styles";

import { Header } from '../../components/Header/Index'
import { Button } from '../../components/Button/Index'
import { Input } from '../../components/Input/Index'
import { IngredientsItems } from '../../components/IngredientsItems/Index'

import { FiUpload } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";






export function NewDish() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    

    function handleAddTags() {
        if(!newTags) {
            alert("Não é possível inserir uma tag vazia, escreva o nome do ingrediente para continuar.")
            return
        }
        setTags(prevState => [...prevState, newTags])
        setNewTags("");
    }

    function handleDeletTags(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
        
    }


    async function handleAddNewDish() {
        if(newTags) {
            alert("Você deixou um ingrediente no campo para adicionar mas não adiciononu, clique para adicionar ou deixe o campo vazio para continuar")
            return 
        }
        await api.post("/menu", { 
             title, 
             description, 
             category, 
             price, 
             tags
    
    });

        alert("Prato criado com sucesso!")
        navigate("/")
    
   
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
                       { 
                          tags.map((tag, index) => (
                            <IngredientsItems 
                               key={String(index)}
                               value={tag}
                               onClick={() => handleDeletTags(tag)}
                           />
                           ))
                        }


                        <IngredientsItems
                        isNew
                        placeholder="Adicionar tag"
                        onChange={e => setNewTags(e.target.value)}
                        value={newTags}
                        onClick={handleAddTags}
                        />
                        


                       

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
                        onClick={handleAddNewDish}
                        />
                    </div>
            </Content>
        </Container>
    )
}


                



                        



                    