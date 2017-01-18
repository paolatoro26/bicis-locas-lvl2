
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


        if(!/[a-zaA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/.test(correo))
        {
            document.getElementById("correo").appendChild(nom2);

        }else{
            nom2.style.display="none";
        }
        if(contraseña.length < 6 || contraseña === "123456" || contraseña === "098754" || contraseña === "password")
        {
            document.getElementById("contraseña").appendChild(nom3);
        }else{
            nom3.style.display="none";
        }
        if (bicis<1)
        {
            biciTipo=false;
            document.getElementById("tipo").appendChild(nom4);
            
        }else     {
            biciTipo=true;
            nom4.style.display="none";
        }
        if(nombre ==""||apellido==""||correo==""||contraseña=="")
        {
            document.getElementById("nombre").appendChild(nom1);
           
        }            
    }


 