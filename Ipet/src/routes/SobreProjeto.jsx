import React from 'react'
import Card from 'react-bootstrap/Card';
import './SobreProjeto.css'



function sobreProjeto() {
  return (



    <div className='card-texto'>
    <Card className= "texto" style={{ width: '67rem' }}>
      <Card.Body>
        <Card.Title>IPET</Card.Title>
        <Card.Subtitle className="subtitulo">nossa missão</Card.Subtitle>
        <Card.Text>
        O Ipet surgiu através da ideia de se ter uma carteirinha virtual dos PETS,
      com dados importantes dos tutores e dados de vacinação dos seus bichinhos.
      Assim o governo, clínicas cadastradas e tutores conseguem ter acesso aos
      principais dados de saúde dos animais cadastrados, principalmente sobre a vacina
      antirrábica que é disponibilizada em campanha municipal, gerando estatísticas de vacinação de forma mais rápida e confiável..
        </Card.Text>
      </Card.Body>
    </Card>


    </div>
  )
  
}

export default sobreProjeto
