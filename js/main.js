
    var nombre= document.getElementById("name").value; 
    var apellido= document.getElementById("lastname").value;

function validateNombre(evento)
    {      
        var array = nombre.split("");
        var primeraLetra = array[0];
        var mayus = primeraLetra.toUpperCase();
        var cortePalabra = false;
      
        for(var i=1;i<array.length;i++){
            if(cortePalabra)
            {    
                mayus += array[i].toUpperCase();
                cortePalabra = false;
            }
            else{
                 mayus+=array[i];
            }             
            if(array[i] == " ")
                cortePalabra = true;            
            }    
        document.getElementById("name").value = mayus; 
    }


function validateMayuscula(evento)
    {   
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){
            
        } else {          
            evento.preventDefault();
        }
    }  


function validate()
    {        
        var bicis=document.getElementById("bicis").value;
        var correo=document.getElementById("input-email").value;
        var contraseña=document.getElementById("input-password").value;
        var biciTipo=true;

        var nom =document.createElement("input");
        //var nomText=document.createTextNode("Debe ingresar su nombre");
        //    nom.appendChild(nomText);


        if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(correo))
        {
            alert("correo incorrecto");
        }
        
        if(contraseña.length < 6 || contraseña === "123456" || contraseña === "098754" || contraseña === "password")
        {
             alert("Ingrese otra contraseña");
        }
        if (bicis<1)
        {
            biciTipo=false;
            alert("Elija una bici");
        }
        if(nombre ==""||apellido==""||correo==""||contraseña=="")
        {
            name.appendChild(nom);
            //alert("Falta llenar datos");
        }      
        
    }


 