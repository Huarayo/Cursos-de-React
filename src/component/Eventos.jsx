import React, { Component } from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador : 0,
        }

        //se establece el valor de this
         //Cuando llamamos a this.sumar y this.restar desde los botones onClick, this dentro de estas funciones se refiere al componente Eventos.
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this)
    };

   
    //sto puede ser problemático si se intenta acceder a los métodos o propiedades del componente dentro del manejador de eventos,
    //ya que this no se refiere al componente. Es por eso que se usa bind para establecer explícitamente el valor de this en el
    //componente en el constructor.
    sumar(){
        this.setState({
            contador : this.state.contador + 1,
        })
        console.log(this)
    }

    restar(){
        this.setState({
            contador : this.state.contador -1,
        })
        console.log(this)
    };

    render(){
        return(
            <div>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h2>Eventos de C</h2>
                <h3>{this.state.contador}</h3>
   
            </div>
        )
    }
}

export class EventosES7 extends Component{
    //A partir de ES6, se introdujo una sintaxis de inicialización de estado que permite a los desarrolladores definir el estado de una clase directamente dentro de la definición de la clase.
    state = {
        contador : 0,
    };

   
    //Arrow fucntions: para evitar el bind

    sumar = () => {
        this.setState({
            contador : this.state.contador + 1,
        })

        console.log(this)
    }

    restar = () => {
        this.setState({
            contador : this.state.contador -1,
        })
        console.log(this)
    };

    render(){
        return(
            <div>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h2>Eventos de componentes de clase ES6</h2>
                <h3>{this.state.contador}</h3>

            </div>
        )
    }
}

// function Boton(props){
//     return(
//         <button onClick={props.myOnClick}>Botón, hecho componente</button>
//     )
// }

Boton = ({myOnClick})=> { <button onClick={props.myOnClick}>Boton, hecho componente</button>}

export class MasSobreEventos extends Component{

    handleClick = (e,mensaje) => {
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }

    render(){
        return(
            <div>
                <h2>Más sobre eventos</h2>

                {/* Arrow function is handleEvent:es el manejador de eventos */}
                <button onClick={(e) => {
                    this.handleClick(e,"pasando parametro desde un evento")}
                }
                >Saludar</button>


                {/* Evento personalizado */}
                <Boton myOnClick={(e) => {
                    this.handleClick(e,"pasando parametro desde un evento")
                }}/>
            </div>
        )
    }
}