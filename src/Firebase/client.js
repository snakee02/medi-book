// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const PROVIDER_GOOGLE = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8leI5fP-vpBaGg-EnSH0-lbR0PCol7AM",
  authDomain: "medibook-42cbd.firebaseapp.com",
  projectId: "medibook-42cbd",
  storageBucket: "medibook-42cbd.firebasestorage.app",
  messagingSenderId: "806191101360",
  appId: "1:806191101360:web:0127c4c95eaf0aa97c1275"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function loginGoogle() {
  const auth = getAuth()
  signInWithPopup(auth, PROVIDER_GOOGLE)
  .then((result) => { console.log(result) })
  .catch((error) => { console.log(error)})
    
}

export const onChangeuser = (setUsuario) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    const usuario = user ? user.displayName || user.email : null
    setUsuario(usuario)
  })
}
  
export const onSignOut = () => {
  const auth = getAuth()
  signOut(auth)
}

export const registroUsuario = (formData, setFormData) => {
  const auth = getAuth()

  if(!formData.email || !formData.password) 
    return;

  createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((result) => ( console.log(result)))
  .catch((err) => setFormData({...formData, error: handleError(err.code, err.message) }))
}

export const loginUsuario = (formData, setFormData) => {
  const auth = getAuth()

  if(!formData.email || !formData.password) return;

  signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((result) => (console.log(result)))
  .catch((err) => setFormData({...formData, error: handleError(err.code, err.message) }))
}

function handleError(code, message) {

  switch (code) {
    case "auth/wrong-password":
      return "Correo o contraseña incorrectos."
    case "auth/user-not-found":
      return "Correo o contraseña incorrectos."
    case "auth/invalid-credential":
      return "Correo o contraseña incorrectos."
    case "auth/invalid-email":
      return "Porfavor valida que el correo esté escrito correctamente."
    case "auth/weak-password":
      return "La contraseña debe tener al menos 6 caracteres."
    case "auth/email-already-in-use":
      return "El correo ya está en uso."
    default:
      return message
  }
}