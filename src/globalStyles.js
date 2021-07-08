import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 

body, html {
    margin: 0;
    padding: 0;
}


@font-face{
    font-family: "Rakkas";
    src:url(../utils/fonts/Rakkas-Regular.woff);
}
.cabecera {
   
    display: flex;
    background-color:#FFB5E8;
   /* margin: 2px auto;*/
    height: 140px;
    
}
.cabeceraTitle {
    width: 100%;
    margin-top: 20px;
}
.title{
    font-family: "Rakkas";
    color: #6F6565;
    display: flex;
    width: 90%;
    font-weight: 700;
    justify-content: center;
    text-align: center;
    font-size: 35px;
    margin-bottom: 2px;

}
.title2{
    font-family: "Rakkas";
    color: #6F6565;
    width: 90%;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    font-size: 20px;

}
.cabecera img{
    margin-top: 10px;
    margin-left: 50px;
    border-radius: 160px;
    width: 130px;
    height: 120px;
    
}
.fon2 {
    width: 100%;
    display: flex;
    height: auto;
    margin-top:15px;
    text-align: justify;
    justify-content: center;
    background: #FFFFFF;
}
.contenedor {
    margin: auto;
    justify-content: center;
    width: 100%;
}

nav {
    list-style: none;
    clear: both;
    width: 100%;
    max-height: 45px;
    margin: auto;
    /* background: rgba(17, 59, 53);
    border-bottom: 1px solid white; */
    display:block;
}

.menu ul{
    background-color: #FFCCF9;
    display: flex;
    justify-content: flex-start;
    border-left:1px;
    margin: 0px;
    height: 45px;
}
.menu li {  
    display: inline-block; /*Coloca de manera horizontal el contenido*/
    background-color: #FFB5E8;
    padding-top: 3px;
    border-right: 1px solid white;
    text-align: center;
    font-size: 16px;
    margin-left: 30px;
    position: relative; /*controlar la posicion de un elemnto*/
    left: -30px;
    height: 30px;
    width: 170px;
    margin-top: 6px;
    border-radius: 8px;    
}

.menu  a {
    text-decoration: none;
    color: #6F6565; 
    font-size: 16px; 
    letter-spacing: 0.3px; 
    font-weight: bold; 
}

.menu a:hover { /*Permite resaltar un texto, una imagen o una caja contenedora*/
    color: #EAEAEA;
}


.fotoprincipal img {
    width:100%;
    height: 300px;
}

.cajas {
    width: 100%;
    height: 100%;
    text-align: center;
    float: left; 
    background-color:#EAEAEA;
    max-width: 33.3333%;
    font-size: 15px;
}

.cajas img {
    background-color:#EAEAEA;
    height:100%;
}

.cajas h3{
    margin: 10px;
    font-size: 20px;
    
}

.cajas p{
    margin: 10px;
    text-align: justify;    
}

.listas {
    list-style-position: inside;

}
.imalipo{
    width: 58%;
}
.imalipo img{
    width: 90%;
}
.info {
    width: 100%;
    height: auto;
    background-color: #FFB5E8;
}
.contenidoQuienes{
    margin-left: 10px;
    margin-right: 50px;
    margin-top: 40px;
    justify-content: center;
    text-align: justify;
    align-items: center;
    font-size: 17.7px;
    width: 30%;
}
#contenido_quienes{
    font-family: 'Times New Roman'
}

.conten{
    font-family: 'Times New Roman', Times, serif;
    font-weight: 550;
    font-size: 20px;
}
.quienes{
    text-align: center;
    font-size: 28px;
    font-family: serif;
    font-style: italic;
    color: #6F6565;
    font-weight: 700;
}
.row {
    width: 100%;
    justify-content: justify;
    text-align: center;
    color: #EAEAEA;
}
.col-7{
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
}
.col-4{
    font-family: serif;
    font-size: 20px;
    font-weight: 700;
    color: #6F6565;
}
.col-1{
    display: flex;
    margin-left: 48%;
    justify-content: center;
    align-items: center;
}
.col-2{
    margin-left: 21%;
}
.pie_de_pagina {
    text-align: center;
    background-color: #000000;
    color: #EAEAEA;
    border: 2px solid #000000; 
    justify-content: flex-start;

}

@media screen and (min-width: 768px) and (max-width:941px){
    .menu li {  
    height: 30px;
    width: 150px;
      
}
.conten{
    font-size: 16px;
}

.imalipo img{
    width: 95%;
    height: 100%;
}

.contenidoQuienes{
    
    margin-top: 20px;
    
}

}

`;