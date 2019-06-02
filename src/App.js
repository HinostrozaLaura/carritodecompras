import React, { Component } from 'react';
import './App.css';
const productos =[
  {
    id:1,
    nombre:'menestra',
    precio:3,
    imagen:null
  },
  {
    id:2,
    nombre:'leche',
    precio:2.3,
    imagen:null
  }, {
    id:3,
    nombre:'fruta',
    precio:2.3,
    imagen:null
  }, {
    id:4,
    nombre:'pollo',
    precio:1.5,
    imagen:null
  },
]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newProduct: "",
      listaProducto:[]
    }
  }

  onChangeText = (event) => {
    console.log(event.target.value)
    this.setState({newProduct:event.target.value})
    
  }

  enviarFormulario = (event) => {
    event.preventDefault();
    const {newProduct,listaProducto}=this.state;
    const productoEncontrado = this.buscarProductoPornNombre(newProduct);
    if(productoEncontrado!=null){
      listaProducto.push(productoEncontrado);
       this.setState({listaProducto:listaProducto,newProduct:''})
    }else{
      alert('no se encuentro el producto'+newProduct)
    }
   
    
  }
  buscarProductoPornNombre =(nombre) => {
    
    let productoencontrado = null;
    for(let i=0;i<productos.length;i++){
      const producto =productos[i];
      if (producto.nombre === nombre){

        productoencontrado =producto;
        break;
      }
    }
    return productoencontrado;
  }

  render() {

    const {newProduct ,listaProducto}=this.state
    let total =0.0;
    for (let index = 0; index < listaProducto.length; index++) {
      const producto = listaProducto[index];
      total +=producto.precio
      
    }
    return (
      <div className="container">
        <h1 className="title">Lista de tareas <span aria-label="emoji" role="img">🔥</span></h1>
        <form onSubmit={this.enviarFormulario}>
          <input value={newProduct} type="text" className="new-task" onChange={this.onChangeText} />
        </form>
        <div >
           <h3 className="title">{"total:"+total}</h3>
           
         </div>
        <h2 className="test-label">{newProduct}</h2>
        {listaProducto.map((productos)=>(
           <div className="task-container">
           <h3 className="task">{productos.nombre}</h3>
           
         </div>
         
        ))
         
         
        }
      </div>
    );
  }
}

export default App;