import { useEffect, useState } from "react";

const UseEffect03 = () => {
  const [nombre, setNombre] = useState("Laura");
  const [apellido, setApellido] = useState("");

  // useEffect --> Ciclo de vida de un componente
  // useEffect(() => {
  //   console.log("Componente montado");

  //   return () => {
  //     console.log("Componente desmontado");
  //   };
  // },[dependencias]);

  useEffect(() => {
    console.log("useEffect 1- Solo se ejecuta una vez cuando React carga el componente (lo monta)");
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("useEffect 2- Siempre que haya un cambio en el componente");
  });

  useEffect(() => {
    console.log("useEffect 3 - Siempre que 'user' cambie de estado");
  }, [nombre]);

  function handleNombre(e) {
    setNombre(e.target.value);
  }
  function handleApellido(e) {
    setApellido(e.target.value);
  }
  return (
    <>
      <h1>Prouebas con UseEffect</h1>
      <h2>{nombre} {apellido}</h2>
      <form>
        <input
          type='text'
          name="nombre"
          placeholder='Ingrese su nombre'
          onChange={handleNombre}
        />
        <input
          type='text'
          name="apellido"
          placeholder='Ingrese su apellido'
          onChange={handleApellido}
        />
      </form>
    </>
  );
}

export default UseEffect03;
