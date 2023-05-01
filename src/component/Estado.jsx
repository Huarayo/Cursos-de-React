import React , {Component} from "react";



function EstadoAHijo(props) {
    return(
        <>
            <h3>Contador Hijo: {props.contadorHijo}</h3>
        </>
    )
}





export default class Estado extends Component{

    constructor(props){
        super(props);

        //es el estado del componente(OBJETO DE LA CLASE ESTADO)
        this.state = {
            contador:0,
        }
 
    }
    
    //hace que el setState sea asincrono , y en el momento adecuado del ciclo de vida del componente
    componentDidMount() {

        //la funcion tiene que ser flecha para no hacer referencia al objeto global
        //en funcion setInterval: si se le pasa como argumento una function() y eso hace que a la hora de usar this
        //-----------------.....hace que haga referencia al ambito global , porque esa funcion ya esta en el ambito
        //global desde que es un argumento.
        setInterval(()=>{

            //cada vez que cambie el estado o actualice el React se encarga de mostrarlo
            this.setState({
                contador: this.state.contador + 1,
            });
        },1000)


    }

    render(){
        return(
            <div>
                <h2>Estado</h2>
                {/* this se refiere al objeto de la clase Estado */}
                <p>Contador Padre: {this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}