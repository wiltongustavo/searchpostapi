import React from 'react';
import SearchPost from '../services/SearchPost';
import'../pages/globalcss/App.css';
import  '../pages/globalcss/Normalize.css';
import  '../pages/globalcss/bootstrap.min.css';



export default function Header() {


return (
    
    
        <header className="header1 ">

            <div className="headerprincipal">
              <div className="textitem">
                <h5 className=" ">Ola <strong className=""> Wilton Gustavo</strong>, Selecione uma postagem abaixo:</h5>
              </div> 
                            <div className="cardelemento">
                                  <SearchPost/>
                            </div>

            </div>

           
        </header>
);


}




