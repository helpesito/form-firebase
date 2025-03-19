import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAg-sf9VIs25jffrhgCEcWt1Dw5vY-_8Ls",
    authDomain: "form-data-aafd2.firebaseapp.com",
    projectId: "form-data-aafd2",
    storageBucket: "form-data-aafd2.firebasestorage.app",
    messagingSenderId: "1374450216",
    appId: "1:1374450216:web:458e78cefe9fe8abeb7b1d",
    measurementId: "G-G7C7XYGG31"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('formulario').addEventListener('submit', async (event) => {
    event.preventDefault();

    //validacion nombre
    let nombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(nombre.value.trim() === ''){
        errorNombre.textContent = 'El nombre es obligatorio';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    //validacion email
    let email = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        errorEmail.textContent = 'el correo el obligatorio';
        errorEmail.classList.add('error-message');
    }else{
        errorEmail.textContent = '';
        errorEmail.classList.remove('error-message');
    }

    //validacion contraseña
    let password = document.getElementById('password');
    let errorPassword = document.getElementById('passwordError');
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if(!passwordPattern.test(password.value)){
        errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales';
        errorPassword.classList.add('error-message');
    }else{
        errorPassword.textContent = '';
        errorPassword.classList.remove('error-message');
    }

    //envio de formulario

    if(!errorNombre.textContent && !errorEmail.textContent && !errorPassword.textContent){

        try {
            const docRef = await addDoc(collection(db, "users"), {
            name: nombre.value,
            email: email.value,
            password: password.value
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
        alert('Formulario enviado');
        document.getElementById('formulario').reset();
    }
});