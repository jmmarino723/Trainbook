import './Messages.css';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
// const estilo ={width: "100%", height: '200px', borderTopRightRadius: '20px'};
// {url,nombre,precio}
function Messages(){
    const [mail, setValueMail]=React.useState('');
    const [fullname, setValueFullname]=React.useState('');
    const [messageSent, setValueMessage]=React.useState('');
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(`Nombre: ${fullname}, Nombre completo: ${mail}, Mensaje: ${messageSent}`)
    }
    const changeMail =(event)=>{
        setValueMail(event.target.value);
    }
    const changeFullname =(event)=>{
        setValueFullname(event.target.value);
    }
    const changeMessage =(event)=>{
        setValueMessage(event.target.value);
    }
    return(
        
        <div className="messages" class="container">
            <div class="item" id="texto">
                <h1 id="tittle">
                    Get In Touch
                </h1>
                <p id="messageQuestions">
                    Send us your questions, requests or messages. Our team will get in touch as soon as possible.
                </p>
                <div class="line" id="line"></div>
                <div class="location">
                    <p><LocationOnIcon/>   Medellín, Antioquia. COLOMBIA</p>
                </div>
                <div class="phone">
                    <p><PhoneEnabledIcon/>   (+57) 3508904568</p>
                </div>
            </div>
            <div class="item" id="form">
                <form >
                    <input type="email" class="form-control" id="mail" placeholder="Email" required value={mail} onChange={changeMail}></input>
                    <input type="text" class="form-control" id="name" placeholder="Full Name" required value={fullname} onChange={changeFullname}></input>
                    <textarea placeholder="Message" id="textMessage" class="textMessage" required value={messageSent} onChange={changeMessage}></textarea>
                    <input type="submit" id="submit" value="Send" onClick={handleSubmit}></input>
                </form>
            </div>
            {/* <img src={url} alt="Opción" style={estilo}></img>
            <h1>{nombre}</h1>
            <p class="price">${precio}</p>
            <p>Some text about the jeans..</p>
            <p><button>Add to Cart</button></p> */}
        </div>
    );
}
  
export default Messages;