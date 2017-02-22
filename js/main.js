//--------------CODIGO CON JQUERY-------------- 
function validateForm()
{
    validarNombre();
    validarApellido();
    validarEmail();
    validarContrasenia();
    
}
function crearSpan(container,mensaje)
{
    if(container.find("span").length==0)
        container.append("<span>"+mensaje+"</span>")
}

function eliminarSpan(container)
{
    container.find("span").remove();
}
function validarNombre()
{   
    var contenedor = $(".name-container");
    var input=$("#name").val();
    if(input.length=="")
    {
        crearSpan(contenedor,"Debe ingresar su nombre")
    }
    else{
        eliminarSpan(contenedor)
    }
}
function validarApellido()
{ 
    var contenedor = $(".lastname-container");
    var input=$("#lastname").val();
    if(input.length=="")
    {
        crearSpan(contenedor,"Debe ingresar su apellido")
    }
    else{
        eliminarSpan(contenedor)
    }
}
function validarEmail()
{
    var contenedor =$(".email-container");
    var input=$("#input-email").val();
    if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(input))
    {
        crearSpan(contenedor,"Verifique su e-mail");
    }
    else{
        eliminarSpan(contenedor)
    }
}
function validarContrasenia()
{
    var contenedor =$("#contra");
    var input=$("#input-password").val();
    if((input).length < 6 || input == "123456" || input== "098754" || input== "password")
    {
        crearSpan(contenedor,"La contraseña debe tener al menos 6 caractere");
    }
    else{
        eliminarSpan(contenedor)
    }
}
function validarBicicleta()
{
    var input=$("#lastname").val();
    if(input.length=="")
    {
        $("").after("<span>Debe ingresar su apellido</span>");
    }
    else{
        eliminarSpan(contenedor)
    }
}
   
 
//-------------CODIGO SOLO JAVASCRIPT----------
    /* 
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

