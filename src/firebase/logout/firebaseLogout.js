import { signOut } from "firebase/auth";


export const logoutUser = (auth) =>{

    return signOut(auth)
    .then(() =>{
    })
    .catch((error) =>{
    })
        
}