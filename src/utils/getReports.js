import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";


export async function getReports() {
    try {
        const reportsCollectionRef = collection(db, "reports");

        const querySnapshot = await getDocs(reportsCollectionRef);

        const reportsData = querySnapshot.docs.map((doc) => ({
            id : doc.id,
            ...doc.data(),
        }));

        console.log("Dados dos relatórios:", reportsData);

        return reportsData;

    } catch (error) {
        console.error("Erro ao pegar os documentos:", error);
    }
}