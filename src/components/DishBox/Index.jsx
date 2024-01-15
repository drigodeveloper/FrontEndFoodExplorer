import { Container } from "./styles";

import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"

import{ Counter } from '../../components/Counter'
import{ Button } from '../../components/Button/Index'

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

import maskgroup from '../../assets/Mask group-10.png'





export function DishBox({title, price, description, is_admin = false}) {

    const { user } = useAuth();

    return(
        <Container >
            <button className="likeButton">
                { user.role === USER_ROLE.CUSTOMER ? <FaRegHeart /> : <MdOutlineEdit/> }
            </button>

            <img src={maskgroup} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>R${price}</h2>
            
           { 
           user.role === USER_ROLE.CUSTOMER ?
           <div className="counter">
                <Counter />
            </div> 
            :
            ""
            }

            { user.role === USER_ROLE.CUSTOMER ? <Button title="incluir"/> : ""}

            
            
        </Container>
    )
}