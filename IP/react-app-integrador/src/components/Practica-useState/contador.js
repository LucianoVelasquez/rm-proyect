import React from "react";

class Contador extends React.Component{ /* Componente de clase */
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    aumentHandle = () =>{
        this.setState({count: this.state.count + 1},()=>console.log(this.state.count)); 
        /* Utilizar la callback para que no se produsca un diley
        se utiliza para tener el estado en tiempo real. */
    }
    decrementHandle = () =>{
        this.state.count && this.setState({count: this.state.count - 1}); /* Si tengo algo en count ejecuta el set */
    }
    zeroHabdle = () =>{
        this.setState({count: 0})
    }
    render(){
        return(
            <div>
                <h1>Soy un contador</h1>
                <p>{this.state.count}</p>
                <button onClick={this.aumentHandle}>Aumentar</button>
                <button onClick={this.decrementHandle}>Decrementar</button>
                <button onClick={this.zeroHabdle}>Reiniciar</button>
            </div>
        );
    }
}

export default Contador;