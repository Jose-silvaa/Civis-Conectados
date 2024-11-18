import { signInWithEmailAndPassword } from "firebase/auth";


export const loginUser = async (auth, email, password) =>{

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}