import React from 'react';
import { Link } from 'react-router-dom'
import'../pages/globalcss/bootstrap.min.css';
import  '../pages/globalcss/Normalize.css';
import'../pages/globalcss/Login.css'




export default function Login(){


   

    return(
        
        <div className="logon-container">
            <section className="form" >

                <form id="app">
                < h1>Faça Seu Logon</h1>
                <input   placeholder="Digite Seu Nome"/>
                
                <Link to="/homepage" >
                    <button className="button1">Entrar</button>
                </Link>

                </form>
                

            </section>
        </div>
    );
}