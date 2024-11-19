import { doc, updateDoc } from "firebase/firestore"

export default async function updateDocument(db, docsId, newStatus){

    const statusRef = doc(db, "reports", docsId)
    try {
        await updateDoc(statusRef, {
            status : newStatus,
        })
    } catch (error) {
        console.log("status");
    }
}