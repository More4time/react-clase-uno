import { Tarjeta,BlogPost2 } from './Tarea1.js';
import {MatchNombre, PasswordInput, ValidationInput} from './Tarea2.js'
import {CheckboxList, UncontrolledCheckbox} from './Tarea3.js'


export default function Tareas(props){
return(
    <React.Fragment>
  <Tarjeta
    nombre="Lautaro Moreno"
    titulo="Programador Front End"
    imagen= "img\Foto cv.jpg"
  />,
  <BlogPost2
  tituloPrincipal="Mi CV?"
  parrafos={`Hoy vi una ardilla.
    Mi nombre es Lautaro Moreno tengo 24 años y estoy estudiando programación en el curso r/Argentina Programa
    Estoy por la clase 15 y con mucho  entusiasmo terminando la parte de React.`}
  autor={{
    nombre: "Lautaro Moreno",
    titulo: "Desarrollador fronted ",
    imagen: "img\Foto cv.jpg",
  }}
/>,
 <MatchNombre nombre="lautaro"/>,

 <PasswordInput minLength = {7}/>,
 
 <ValidationInput validation = {(value) => value.match(" ")} />,

 <CheckboxList
    items={{
        uno: false,
        dos: true,
        tres: true,
    }}
 />
 
 <UncontrolledCheckbox name="UNO"/>,
    
  </React.Fragment>
  )
}