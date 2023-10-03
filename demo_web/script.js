console.log("Welcome to FullStack");

//validación de formulario
//primero hay que seleccionar el formulario y escoger el evento que va a ocurrir cuando el ususario le de al input de tipo "submit". El evento es submit también

document.getElementById("contactForm").addEventListener("submit", function(event){
 //Dentro de event están todos los datos del formulario enviado. 
    event.preventDefault();//evita el comportamiento por defecto del formulario
    console.log("Has enviado el formulario !!")
    
    console.log(event)//permite ver los resultados del formulario, te hace un impreso del objeto ENTERO, gigantesco
    console.log(event.target.elements); //te da los inputs

    console.log(event.target.fname.value);//accedemos al nombre y con esto podemos acceder a todos los campos igual, accediendo a su name:
    console.log(event.target.lname.value);
    console.log(event.target.email.value);
    console.log(event.target.tlf.value);
    console.log(event.target.favorite.value); //select
    console.log(event.target.season.value); //radio
    console.log(event.target.accept.checked);//checkbox(es un booleano)
    console.log(event.target.spam.checked)//checkbox de publicidad
    console.log(event.target.comments.value)
    //lo importante de esto es cómo controlar el envio del formualrio. Cómo parar el formulario para hacer el chequeo previo, etc.


    const fname = event.target.fname.value //3<fname<30 
    const lname = event.target.lname.value //3<lname<30 
    const email = event.target.email.value //.com .es @ 
    const tlf= event.target.tlf.value // number  y 9 valores 
    const favorite = event.target.favorite.value //required?
    const season = event.target.season.value //required
    const accept =event.target.accept.checked //required
    const spam =event.target.spam.checked //required
    const comments =event.target.comments.value


let msj ="";



    if(fname.length <3|| fname.length > 30){
        console.log("Nombre fuera del tamaño: 3-30"); //también puede ser una alerta, pero no abusar de las alertas!
        msj+="Nombre fuera del tamaño: 3-30\n";
    }
    if(lname.length <3|| lname.length > 30){
        console.log("Apellido fuera del tamaño: 3-30");
        msj+"Apellido fuera del tamaño: 3-30\n";
    }

    if((!email.endsWith(".com") && !email.endsWith(".es")) || !email.includes("@")){
        console.log("Error validación" + email);
        msj+= "Error validación" + email +"\n";
    }

    if(tlf.length != 9 && typeof tlf != Number){
        console.log("Error validación" + tlf);
        msj+= "Error validación" + tlf +"\n";
    }

    if(season ==""){
        console.log("Selecciona alguna estación del año");
        msj+="Selecciona alguna estación del año \n";
    }

    if(!spam || !accept){
        console.log("Acepta condiciones o envío de publicidad");
        msj+="Acepta condiciones o envío de publicidad\n";
    }


    //Comprobar si hay errores
    if(msj.length != 0){
        alert(msj); //imprime mensaje final de error

        let parrafo = document.createElement("p");
        let mensaje= document.createTextNode(msj);
        parrafo.appendChild(mensaje);

        document.getElementById("contact").appendChild(parrafo);//dibuja resultado
    }

})
