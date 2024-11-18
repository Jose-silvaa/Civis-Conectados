import { createUserWithEmailAndPassword } from "firebase/auth";


export const registerUser = (auth, email, password) =>{

  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
}

