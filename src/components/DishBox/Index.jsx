import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, AdminButton, CustomerButton, ImageDish } from "./styles";
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button/Index'

import { useAuth } from "../../hooks/auth"


import { FaRegHeart } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

import maskgroup from '../../assets/Mask group-10.png'

import { USER_ROLE } from "../../utils/roles"

export function DishBox({ data, ...rest }) {

  const { user } = useAuth();
  const params = useParams();

  const [dish, setDish] = useState("");



useEffect(() => {
  async function fetchDishes() {
    const response = await api.get(`/menu/${params.id}`)
    setDish(response.dish)
  }
}, [])
  

  return (
    <Container {...rest}>
      {user.role === USER_ROLE.CUSTOMER ? (
        <CustomerButton 
        
        >
          <FaRegHeart />
        </CustomerButton>
      ) : 
      
      (
        <AdminButton to="editDish">
          <MdOutlineEdit />
        </AdminButton>
      )}

      <ImageDish to="/details">
        <img src={maskgroup} alt="" />
      </ImageDish>

      <h1>{dish?.title}</h1>
      <p>{dish?.description}</p>
      <h2>R${dish?.price}</h2>

      {user.role === USER_ROLE.CUSTOMER && (
        <div className="counter">
          <Counter />
        </div>
      )}

      {

      user.role === USER_ROLE.CUSTOMER && 
      <Button 
      title="incluir" 
      
      />
      
      }
    </Container>
  );
}
