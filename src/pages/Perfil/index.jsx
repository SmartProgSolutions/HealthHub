import "./styles.css";
import { Component } from 'react';
import { ProfileForm } from "../../components/ProfileForm";

class Perfil extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: localStorage.getItem('email'),
            senha: localStorage.getItem('password')
        }
    }

    componentDidMount(){
        const email = localStorage.getItem("email");
        const senha = localStorage.getItem("password");
        
        if(!email || !senha){
            window.location.href = "/login";
            return;
        }
    }

    render(){
        const {email, senha} = this.state;

        return(
            <div className="profilePage">
                {!email || !senha ? (
                    <h1>Faça login para acessar a página do perfil</h1>
                ) : (
                    <>
                        <div className="profile-info">
                            <h1>Informações do Usuário</h1>
                            
                            <div className="userInfo">
                                <h2>Editar Perfil</h2>
                                <ProfileForm email={email}/>
                            </div>
                        </div>
                        
                    </>
                )}
            </div>
        );
    }
}

export default Perfil;