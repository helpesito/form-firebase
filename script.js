import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
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