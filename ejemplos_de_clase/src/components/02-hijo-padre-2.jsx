import { useState } from "react";

const Hijo3 = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { onTextChange } = props;
  return (
    <input type='text' placeholder='Para el padre' onChange={onTextChange} />
  );
};

const Padre3 = () => {
  // Creamos un estado para el mensaje y la función que actualiza
  // su estado con useState:
  const [name, setName] = useState("Laura");

  // En este caso como en el hijo se está utilizando
  // la función "onChange" de "input", para capturar
  // el valor se debe acceder al evento (e) y a target.value
  return (
    <div>
      <h1>Hola, mi nombre es {name}</h1>
      <Hijo3 onTextChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Padre3;
