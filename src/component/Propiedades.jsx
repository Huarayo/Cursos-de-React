

export default function Propiedades(props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
              <li>{props.cadena}</li>
              <li>{props.numero}</li>
              <li>{props.booleano ? "Verdadero":"Falso"}</li>
              <li>{props.arreglo.join(", ")}</li>
            </ul>
        </div>
    );
}


//Crea una propiedad sin necesidad de un componente Padre

Propiedades.defaultProps = {
  porDefecto: "Las Props",
}