import GlobalStyle from "../styles/global.js";
import styled from "styled-components";
import Form from "../componets/Form";
import Grid from "../componets/Grid";
import Gridpet from "../componets/Gridpet";
import Formpet from "../componets/Formpet";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";// feedback na tela quando o usuario faz uma açao
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: #696969; 
  `;

//async porque terei que esperar o banco de dados os dados
function Cadastro() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));// vai ordenar por ordem alfabetica
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const [pet, setPet] = useState([]);
  const [onEditPet, setOnEditPet] = useState(null);


  const getPet = async () => {
    try {
      const res = await axios.get("http://localhost:8800/pet");
      setPet(res.data.sort((a, b) => (a.nome_pet > b.nome_pet ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPet();
  }, [setPet]);


  return (
    <>
      <Container>
        <Title>Cadastro do Usuário</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Formpet onEditPet={onEditPet} setOnEditPet={setOnEditPet} getPet={getPet}/>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <Gridpet pet={pet} setPet={setPet} setOnEditPet={setOnEditPet}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGTH} />
      <GlobalStyle />
    </>
  );
}


export default Cadastro;