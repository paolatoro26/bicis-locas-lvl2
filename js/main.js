
   function validate()
    { 
        nombre();
        apellido();
        email();/* 
        contraseña ();
        bicicleta();*/
    }   
   function crearNodo(container,mensaje)
    {   
        var spans=container.getElementsByTagName("span");
        if(spans.length==0)
        {
           var span =document.createElement("span");
            span.innerText=mensaje;
            container.appendChild(span); 
        }
               
    }
    
    function eliminarNodo(input)
    {   
        if(input.nextSibling!=null)
            input.parentNode.removeChild(input.nextSibling);
    }              
 
    function validarNombre()
    {
        var nombre= document.querySelector(".name-container");
        var input=document.getElementById("name");
        //Nombre llenado correctamente
        if(input.value =="")
        {
           crearNodo(nombre, "Debe ingresar su nombre");
           
        } 
        else{
             eliminarNodo(input);
           }
    }
    
    function validarApellido()
    {
        var apellido= document.querySelector(".lastname-container");
        var input=document.getElementById("lastname");
        //Apellido llenado correctamente
        if(input.value =="")
        {
           crearNodo(apellido, "Debe ingresar su apellido");     
        } 
        else{
            eliminarNodo(input);
        }
            
           
    }
    function validarEmail()
    {
        var email= document.querySelector(".email-container");
        var input=document.getElementById("input-email");
        //E-mail llenado correctamente
        if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(input.value))
            {
            crearNodo(email, "Verifique su e-mail");
            
            } 
        else{
            
            eliminarNodo(input);
           }
    }
    function validarContrasenia()
    {
        var contrasenia= document.getElementById("contra");
        var input=document.getElementById("input-password").value;
        //Contraseña llenado correctamente
        if(input.length < 6 || input == "123456" || input == "098754" || input == "password")
        {

           crearNodo(contraseña, "Contraseña valido");
            eliminarNodo(input);
        } 
        else{
             crearNodo(contraseña, "La contraseña debe tener al menos 6 caracteres");
           }
    }
    function validarBicicleta()
    {
        var bicis= document.getElementById("bicis");
        var option=document.getElementsByTagName("option")[0];
        //Elegir una bicicleta obligatorio
        if(option)
            crearNodo(bicis, "Seleccion valida");
            eliminarNodo(input);
        } 
        else{
             crearNodo(bicis,"Debes seleccionar al menos un tipo de bici");
           }
    }      


 