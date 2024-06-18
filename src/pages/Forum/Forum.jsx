import './Forum.css';
import React from "react";
import Conversa from "../../components/conversation/Conversa";
import { Widget } from "../../components/Widget";
import Header from '../../components/header/header';


function Forum() {
  return (
    <>

    <Header />
    <div className='body-forum'>
      {<Widget />}
      <Conversa></Conversa>
    </div>
    </>
    
  );
}

export default Forum;
