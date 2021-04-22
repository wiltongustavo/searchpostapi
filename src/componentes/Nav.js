import React from 'react';
import ReactDOM from 'react-dom';
import usuarioImg from '../img/usuario.png';
import'../pages/globalcss/bootstrap.min.css';
import  '../pages/globalcss/Normalize.css';
import '../pages/globalcss/App.css'
import { Link } from 'react-router-dom';

export  default function Nav(props){
    return(
               
            <div>
                <nav id="navprincipal" >
                            <div className="container navprincipal">

                                <div className="row">

                                    <div class="col-sm-3">
                                       
                                            <img className="img-fluid " alt="Logo"/>
                                         
                                    </div>
                                    <div className="col-sm-6">
                                            <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                               
                                                <a className="nav-link btnhome " href="#">Home</a>
                                                
                                            </li>

                                            <li className="nav-item ">
                                              
                                                <a className="nav-link btnhome" href="#">Usuarios</a>
                                             
                                            </li>
                                            <li className="nav-item">
                                                
                                                <a className="nav-link btnhome" href="#">Postagens</a>
                                               
                                            </li>
                                            </ul>
                                        
                                    </div>
                                    <div class="col-sm-3">
                                    
                                    <div className="imagemusuarios">   
                                    
                                            <img  className=" img-fluid " src={usuarioImg} alt="Logo"/>
                                            
                                    </div>    

                                        <div className=" usuariologin"> 
                                                                    
                                            <a className="  usuarios textos " href="#" >Wilton Gustavo </a>
                                       
                                        </div>    
                                            
                                        <div className=" usuariologin">  
                                        
                                          
                                        <Link  to="/login" className="linkdesconect textos">
                                                Desconectar
                                        </Link>
                                        
                                        </div>
                                        
                                        
                                    </div>

                                </div>

                            </div>

                    </nav> 
                    <nav className="estilo"></nav>
         </div>
            
           
           
    );
}