import React from 'react'
import './Home.css'
import Calendar from '../componets/Calendar';

function Home() {
  return (
    <div className='body'>

      <div className='calendario'>
        <h1 className='titulo'>Bem-vindo ao iPet!</h1>
        <h2>Fique atento ao calendário vacinal:</h2>
        <Calendar></Calendar>
      </div>

      <div className='servicos'>
        <h3>Nossos Serviços</h3>
        <p>O iPet chegou para centralizar os serviços de vacinação de cães e gatos no município do Rio de Janeiro. Faça o cadastro do seu pet para ter acesso à Caderneta De Vacinação Pet, adicione as vacinas já feitas e ative as notificações para saber das próximas campanhas!</p>
        <div className='links'>
          <a href=""><img src="./img/01.png" alt="" /></a>
          <a href=""><img src="../02.png" alt="" /></a>
          <a href=""><img src="../03.png" alt="" /></a>
        </div>
      </div>
    
    </div>
  )
}

export default Home