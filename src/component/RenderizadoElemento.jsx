import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementosLista(props) {
    return(
        <li>
            <a href={props.dataElem.web} target="_blank">{props.dataElem.name}</a>
        </li>
    )
}
export default class RenderizadoElementos extends Component{

    constructor(props) {
        super(props);
        this.state = {
            seasons:["Primavera","Verano","Otoño","Invierno"],
        }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de Elemntos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {
                        this.state.seasons.map((elem) => (
                            <li key={elem}>{elem}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((elem,index) => (
                           //el key va a ser el indice del elemento
                            // <ElementosLista key={index} dataElem={elem}/>
                            
                            //el key va a ser el id que se encuentra en el archivo json
                            <ElementosLista key={elem.id} dataElem={elem} />
            
                        ))
                    }
                </ul>
            </div>
        );
    }
}