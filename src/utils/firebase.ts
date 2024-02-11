// New imports for database work
import { firebaseConfig } from '../../fbconfig'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query} from 'firebase/firestore';

// Establish connection to database
// Initialise database 
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export async function getRecommendations(){

    const IPs : any[] = []

    const qVis = query(collection(database, "recommendations"));

    await getDocs(qVis).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            IPs.push(doc.get("IP"));
        });
    });
    
    return IPs
}