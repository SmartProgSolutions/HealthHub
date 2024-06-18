import { Link } from 'phosphor-react';
import Botao from '../botao/Botao';
import './header.css'
import { Route } from 'react-router-dom';
// import CampoPesquisa from './pesquisa/pesquisa';
function Header(){
    return(
        <div className='body-header'>

            <h1 className='titulo-header'>HealthHub</h1>

            <img src="../src/assets/Profile-circle.png" className='img-user'/>
            <img src="../src/assets/mao.png" className='img-mao'/>
            <img src="../src/assets/sair-header.png" alt="sair"className='img-sair' />

            <div className='botoes-header'>
                
                   <Botao className='botoes-div-header' propButton='Home'/>
                 <Botao className='botoes-div-header' propButton='Recursos'/> 
                 <Botao className='botoes-div-header' propButton='Profissional'/> 
                 <Botao className='botoes-div-header' propButton='Grupos'/>
                 <Botao className='botoes-div-header' propButton='Consultas'/>  
            </div>

            {/*
             */}
             
            {/* <CampoPesquisa /> */}
          
        </div>
    )
    
}
export default Header;