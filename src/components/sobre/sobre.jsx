import './sobre.css'
function SobreNos(){
    return(
        <div className='body-sobre'>
            {/* <img src="../src/assets/bola.png" alt="ball" className='bola'/> */}
            <div className='texto-sobre'>
                <h1 className='titulo-sobre'>Sobre Nós</h1>
                <div className='conteudo-sobre'>
                    <p>
                    O objetivo do HealtHub é tornar o acesso a cuidados de saúde mental mais inclusivo e convenientemente disponível para todos, 
                    promovendo assim uma comunidade de apoio forte e informada.</p>

                    <p>
                    No HealthHub, acreditamos que a saúde mental é uma parte essencial do bem-estar geral e que todos devem ter acesso a recursos e 
                    suporte de qualidade, independentemente de sua localização ou situação financeira. Nossa plataforma foi criada com a missão de derrubar 
                    as barreiras que muitas vezes impedem as pessoas de buscar e receber ajuda para questões de saúde mental.
                    </p>
                </div>
                
            </div>
            
        </div>
    )
}
export default SobreNos;