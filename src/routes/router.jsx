import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import useAuth  from "../hooks/useAuth"
import Login from '../pages/Login/Login.jsx'       ///Página de Login
import Register from "../pages/Register/Register";             ///Página de Login
import App from "../App";
import Home from "../pages/Home/Home";
import Forum from "../pages/Forum/Forum"; ///Página de Forum"
import Recursos from "../pages/Recursos/index"
import Profissional from '../pages/Profissional/Profissional'; // Página de Consulta
import Grupos from "../pages/Grupos/GrupoDEApoio";
import Consultas_ON from "../pages/Consultas/Consultas";
import Perfil from "../pages/Perfil/index";
import { Anotacoes } from "../pages/Anotacoes";
import SuporteForm from "../pages/Suporte";


//  isso aqui chama a função de autenticaç]ao do usuario 
//  pra saber se o fih duma egua ta logado, ou já fez login 
//  não ta funcionando ainda pq me expulsaram do time de desenvolvimento, mas os arquivos tão ai 
//  eles só precisam ser configurados corretamnete 

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Login />;
// };

const RoutesApp = () => {
  return (
    <Router>
        <Routes>
          {/* <Route path="/home" element={<Private Item={App} />} /> */}
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/recursos" exact element={<Recursos/>}/>  
          <Route path="/register" exact element={<Register />} />
          <Route path="/forum" exact element={<Forum />} />  
          <Route path="/profissional" exact element={<Profissional />} />
          <Route path="/Consultas" exact element={<Consultas_ON />} />
          <Route path="/grupos" exact element={<Grupos />} />
          <Route path="/perfil" exact element={<Perfil/>}/>
          <Route path="/anotacoes" exact element={<Anotacoes/>}/>
          <Route path="/suporte" exact element={<SuporteForm/>} />
        </Routes>
    </Router>
  );
};

export default RoutesApp;
