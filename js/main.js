 
        var nom1 =document.createElement("span");
        var nom2 =document.createElement("span");
        var nom3 =document.createElement("span");
        var nom4 =document.createElement("span");
        var nomText=document.createTextNode("Debe ingresar su nombre");
        var correoText=document.createTextNode("Verifique su e-mail");
        var contraText=document.createTextNode("La contraseña debe tener al menos 6 caracteres");
        var tipoText=document.createTextNode("Debe seleccionar al menos un tipo de bici");
            nom1.appendChild(nomText);
            nom2.appendChild(correoText);
            nom3.appendChild(contraText);
            nom4.appendChild(tipoText);
            
function validate()
    { 

    nombreYapellido();
    biciTipo();
    correo();
    contraseña ();
    validateNombre(evento);

    function nombreYapellido()
    {
        var nombre= document.getElementById("name").value; 
        var apellido= document.getElementById("lastname").value;
        //Nombre y apellido llenado correctamente
        if(nombre ==""||apellido=="")
        {
            document.getElementById("nombre").appendChild(nom1);
           
        } else{
            document.getElementById("nombre").removeChild(nom1);
        }
    }

    function biciTipo()
    {
        var bicis=document.getElementById("bicis");
        var biciTipo=true;
        
        //Si bici tiene algo seleccionado
        if (bicis.value<1)
        {
            document.getElementById("tipo").appendChild(nom4);        
        }else     {
           
            document.getElementById("tipo").removeChild(nom4);
        }
    } 

    function correo()
    {
        var correo=document.getElementById("input-email").value;
        //Estructura del correo electronico
        if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(correo))
        {
            document.getElementById("correo").appendChild(nom2);

        }else{
            document.getElementById("correo").removeChild(nom2);
        }
    }

    function contraseña ()
    {
        var contraseña=document.getElementById("input-password").value;
        
        //Contraseña no menor a 6 caracteres
        if(contraseña.length < 6 || contraseña == "123456" || contraseña == "098754" || contraseña == "password")
        {
            document.getElementById("contraseña").appendChild(nom3);
        }else{
            console.log("ferfrf");
            document.getElementById("contraseña").removeChild(nom3);
        } 
    }

    function validateNombre(evento)
        {      
            var array = nombre.split("");
            var primeraLetra = array[0];
            var mayus = primeraLetra.toUpperCase();
            var corte= false;
          
            for(var i=1;i<array.length;i++){
                if(corte)
                {    
                    mayus += array[i].toUpperCase();
                    corte = false;
                }
                else{
                     mayus+=array[i];
                }             
                if(array[i] == " ")
                    corte= true;            
                }    
            document.getElementById("name").value = mayus; 
        }           
    }


 