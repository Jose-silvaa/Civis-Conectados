import { storage } from "@/firebase/config"
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid";
import { db } from "@/firebase/config";


export default async function uploadImageAndSaveData(file, userData) {
    
    try {
        const storageReference = ref(storage, `images/${file.name + v4()}`);
        await uploadBytes(storageReference, file);

        const imageUrl = await getDownloadURL(storageReference);

        const docRef = await addDoc(collection(db, "reports"),{
            ...userData,
            status: userData.status || 'Pendente',
            imageUrl,
        });

        const generatedId = docRef.id;

        console.log("Documento salvo no Firestore com ID:", generatedId);

    } catch (error) {
        console.error("Erro ao salvar a imagem ou dados:", error);
    }
}