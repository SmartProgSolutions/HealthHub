import React, { useState } from 'react';
import './styles.css';

const SuporteForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='sup'>
      <h1>Página de Suporte</h1>
      <p>Envie-nos sua pergunta ou problema.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Mensagem:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SuporteForm;