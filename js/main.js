//--------------CODIGO CON JQUERY-------------- 
function validateForm()
{
    validarNombre();
    validarApellido();
    validarEmail();
    validarContrasenia();
    validarBicicleta();
}

function validarNombre()
{
    var input=$("#name").val();
    if(input.length=="")
    {
        $("#name").after("<span>Debe ingresar su nombre</span>");
    }
    else{
        $("span").remove();
    }

}
function validarApellido()
{
    var input=$("#lastname").val();
    if(input.length=="")
    {
        $("#lastname").after("<span>Debe ingresar su apellido</span>");
    }
    else{
        $("span").remove();
    }
}
function validarEmail()
{
    var input=$("#input-email").val();
    if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(input))
    {
        $("#input-email").after("<span>Verifique su e-mail</span>");
    }
    else{
        $("span").remove();
    }
}
function validarContrasenia()
{
    var input=$("#input-password").val();
    if((input).length < 6 || input == "123456" || input== "098754" || input== "password")
    {
        $("#input-password").after("<span>Debe ingresar su apellido</span>");
    }
    else{
        $("span").remove();
    }
}
function validarBicicleta()
{
    var input=$("#lastname").val();
    if(input.length=="")
    {
        $("#lastname").after("<span>Debe ingresar su apellido</span>");
    }
    else{
        $("span").remove();
    }

}
   
        //var span = $(".form-container").after("<span>Debe ingresar su nombre</span>")
        
  
//-------------CODIGO SOLO JAVASCRIPT----------
    /* 
$("#lastname").after("<span>Debe ingresar su apellido</span>");
                $("#input-email").after("<span>Verifique su email</span>");
                $("#input-password").after("<span>La contraseña debe tener al menos 6 caractere</span>");
                $("#tipos").after("<span></span>");
    function validate()
    { 
        validarNombre();
        validarApellido();
        validarEmail();
        validarContrasenia();
        validarBicicleta();
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
        else
        {
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
        else
        {
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
        else
        {
            eliminarNodo(input);
        }
    }

    function validarContrasenia()
    {
        var contrasenia= document.getElementById("contra");
        var input=document.getElementById("input-password");
        //Contraseña llenado correctamente
        if((input.value).length < 6 || input.value == "123456" || input.value == "098754" || input.value == "password")
        {
           crearNodo(contrasenia, "La contraseña debe tener al menos 6 caractere");   
        } 
        else
        {
            eliminarNodo(input);
        }
    }
    function validarBicicleta()
    {
        var bicis= document.getElementById("bicis");
        var option=document.getElementById("tipos")[0];
        //Elegir una bicicleta obligatorio
        if(option)
        {
            crearNodo(bicis, "Debes seleccionar al menos un tipo de bici");
        } 
        else
        {
            eliminarNodo(option);
        }
    }    */  

