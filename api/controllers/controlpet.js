import { db } from "../db.js";

export const getPet = (_, res) => {
  const q = "SELECT * FROM pet";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};



  export const addPet = (req, res) => {
    const q =
      "INSERT INTO crud.pet(`cpf_user`, `nome_pet`, `raca`, `nascimento_pet`) VALUES(?)";
  
    const values = [
      req.body.cpf_user,
      req.body.nome_pet,
      req.body.raca,
      req.body.nascimento_pet,
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Pet cadastrado com sucesso.");
    });
  };



  export const updatePet = (req, res) => {
    const q = 
      "UPDATE crud.pet SET `cpf_user` = ?, `nome_pet` = ?, `raca` = ?, `nascimento_pet` = ? WHERE `id` = ?";
  
    const values = [
      req.body.cpf_user,
      req.body.nome_pet,
      req.body.raca,
      req.body.nascimento_pet,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Pet atualizado com sucesso.");
    });
  };


  
  export const deletePet = (req, res) => {
    const q = 
      "DELETE FROM crud.pet WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Pet deletado com sucesso.");
    });
  };