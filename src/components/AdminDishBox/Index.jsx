import { Container, UpdateButton } from "./styles";
import { MdOutlineEdit } from "react-icons/md";
import maskgroup from '../../assets/Mask group-10.png'

import { Link } from "react-router-dom";




export function AdminDishBox({ title, price, description }) {
    return(
        <Container >
            <UpdateButton to="/editDish">
                <MdOutlineEdit />
            </UpdateButton>

            <Link to="/details">
                <img src={maskgroup} alt="" />
            </Link>

            <h1>{title}</h1>
            <p>{description}</p>
            <h2>R${price}</h2>
           

           

            
            
        </Container>
    )
}