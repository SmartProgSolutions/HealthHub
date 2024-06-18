import React, { useState } from 'react';
import ProfileDoctor from '../../components/conversation/MedicoP';
import { Widget } from '../../components/Widget';
import './Consultas.css'; // Arquivo de estilos CSS

const Consultas_ON = () => {
  const [consultasMarcadas, setConsultasMarcadas] = useState([]);
  const [tab, setTab] = useState('marcar'); // Estado para controlar a aba ativa

  // Função para marcar uma nova consulta
  const handleConsultaMarcada = (consulta) => {
    setConsultasMarcadas([consulta, ...consultasMarcadas]);
    setTab('consultas'); // Muda para a aba de consultas marcadas após marcar uma consulta
  };

  return (
    <div className="consultas-container">

      {/* <div className="consultas-tabs">
        
      </div> */}

      {tab === 'marcar' && (
        <div className="consultas-section">
          <div className='section-h2-btn'>
            <h2>Marcar Consulta</h2>
            
            <button className={tab === 'consultas' ? 'active' : ''} onClick={() => setTab('consultas')}>
              Consultas Marcadas
            </button>
          </div>
          <ProfileDoctor onConsultaMarcada={handleConsultaMarcada} />
        </div>
      )}

      {tab === 'consultas' && (
        <div className="consultas-section">
          <h2>Consultas Marcadas</h2>
          {consultasMarcadas.length === 0 ? (
            <p>Nenhuma consulta marcada ainda.</p>
          ) : (
            <ul>
              {consultasMarcadas.map((consulta, index) => (
                <li key={index}>
                  <strong>Médico:</strong> {consulta.medico}<br />
                  <strong>Tipo de Consulta:</strong> {consulta.tipoConsulta}<br />
                  <strong>Data:</strong> {consulta.data}<br />
                  {consulta.tipoConsulta === 'domiciliar' && (
                    <span><strong>Endereço:</strong> {consulta.endereco}</span>
                  )}
                  {consulta.tipoConsulta === 'online' && (
                    <span><strong>Plataforma:</strong> {consulta.plataforma}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          <div className='div-button-marcar'> 
            <button className={tab === 'marcar' ? 'active' : ''} onClick={() => setTab('marcar')} id='button-marcar'>
                  Marcar Consulta
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Consultas_ON;
