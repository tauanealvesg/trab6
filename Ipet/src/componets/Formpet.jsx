import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

    const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    `;


    const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    `;

    const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
    `;

    const Label = styled.label``;

    const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
    `;

    const Form = ({ getPet, onEditPet, setOnEditPet}) => {
    const ref = useRef();

    useEffect(() => {
        if (onEditPet) {
          const pet = ref.current;
    
          pet.cpf_user.value = onEditPet.cpf_user;
          pet.nome_pet.value = onEditPet.nome_pet;
          pet.raca.value = onEditPet.fone;
          pet.nascimento_pet.value = onEditPet.nascimento_pet;
        }
      }, [onEditPet]);


      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const pet = ref.current;
    
        if (
          !pet.cpf_user.value ||
          !pet.nome_pet.value ||
          !pet.raca.value ||
          !pet.nascimento_pet.value
        ) {
          return toast.warn("Preencha todos os campos!");
        }
    
        if (onEditPet) {
          await axios
            .put("http://localhost:8800/pet/" + onEditPet.id, {
              cpf_user: pet.cpf_user.value,
              nome_pet: pet.nome_pet.value,
              raca: pet.raca.value,
              nascimento_pet: pet.nascimento_pet.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:8800/pet", {
              cpf_user: pet.cpf_user.value,
              nome_pet: pet.nome_pet.value,
              raca: pet.raca.value,
              nascimento_pet: pet.nascimento_pet.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }
    
        pet.cpf_user.value = "";
        pet.nome_pet.value = "";
        pet.raca.value = "";
        pet.nascimento_pet.value = "";
    
        setOnEditPet(null);
        getPet();
      };


    return (

        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>CPF dono</Label>
                <Input name="cpf_user" />
            </InputArea>
            <InputArea>
                <Label>Nome pet</Label>
                <Input name="nome_pet" />
            </InputArea>
            <InputArea>
                <Label>Raca</Label>
                <Input name="raca" />
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="nascimento_pet" type="date" />
            </InputArea>

            <Button type="submit">SALVAR</Button>
        </FormContainer>

    );
}

export default Form;