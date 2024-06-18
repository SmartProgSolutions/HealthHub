

import Header from "../../components/header/header";
import Card from "../../components/card/card";
import SobreNos from "../../components/sobre/sobre";
import Footer from "../../components/footer/footer";
import './home.css'
import {Widget} from '../../components/Widget'

function Home(){
    return(
        <div className="div-body">
            <Header />
            <div className="imagem">
                <img src="../src/assets/autismo-pecas.png" alt="imagem-body" className="img-autismo"/>  
            </div>
            
            <Card className="card-rosa"/>
            <SobreNos />
            <Footer />
        </div>
    )

}
{/* 
    export function Home() {
    // importar os elementos da pahina inicial
    // Moço que musica boa do caralho, me desculpem 
    // return <Widget />;

    return (
        <div>
            {/* <Widget /> 
            <span className="text-lg font-bold " >App</span>
        </div>
      )
  
*/}



export default Home; 