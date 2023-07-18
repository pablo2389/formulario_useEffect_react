
const FormularioLogin = (props) => {
  const {autenticadoHook} = props
  
  // Declaramos una función que reaccione al submit del form:
  const eventHandler = (e)=>{
    // Prevenimos que se dispare el formulario mientras estamos en esta función:
    e.preventDefault();
    
    // Capturamos los valores y los validamos
    // En este caso únicamente confirmamos que no estén vacíos
    const username = e.target.username.value;
    const password = e.target.password.value;

    if(!username) {
      alert("Usuario no definido");
      autenticadoHook(false);
      return;
    }
    if(!password || password == "") {
      alert("Passsoword no definida");
      autenticadoHook(false);
      return;
    }

    // Si los datos son válidos, le indicamos la padre (App)
    // que el usuario se ha autenticado utilizando el hook
    // recibido como prop
    autenticadoHook(true);

    // Reiniciar/limpiar los campus del form
    e.target.username.value = "";
    e.target.password.value = "";
    
  };
  
  return (
    // En cada input del fomulario utilizamos: 
    // - EL "type" defini el tipo de dato que aceptará ese input (número, texto, password, email)
    // - El "name" le da el nombre de la variable que utilizaremos en el eventHandler.
    // - El defaultValue se utiliza cuando deseamos colocar un valor por defecto
    <form onSubmit={eventHandler}>
      <label htmlFor="user">Username:</label>
      <input type="text" id="user" name="username" defaultValue={"miUsuario"}></input>
      <label htmlFor="pass">Password:</label>
      <input type="password" id="pass" name="password"></input>
      <input type="submit" value="Ingresar"></input>
    </form>
  );
};

export default FormularioLogin;