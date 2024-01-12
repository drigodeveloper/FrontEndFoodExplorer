import { Container } from "./styles";
import{ Counter } from '../../components/Counter'
import{ Button } from '../../components/Button/Index'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import maskgroup from '../../assets/Mask group-10.png'



export function DishBox({title, price, description, is_admin = false}) {
    return(
        <Container >
            <button className="likeButton">
                <FaRegHeart />
            </button>

            <img src={maskgroup} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>R${price}</h2>
            <div className="counter">
                <Counter />
            </div>

            <Button title="incluir"/>

            
            
        </Container>
    )
}