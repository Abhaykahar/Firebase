import { addDoc, collection,  getDocs, getFirestore } from "firebase/firestore"
import app from "../../firebaseconfig";

const db=getFirestore(app);

export const ViewUsers = () =>{
    return async(dispatch)=>{
        try{
            const data=collection(db,'Firebase-Firestore')
            const userList=await getDocs(data);
            const record=userList.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }))
            dispatch({
                type:'viewuser',
                payload:record
            })
        
        }catch(err){
            dispatch({
                type:'viewusererror',
                payload:err,
            });
        }
    }
}

export const Adduser = (user) =>{
    return async(dispatch)=>{
        try{
            await addDoc(collection(db,"Firebase-Firestore"),{
                name:user.name,
                phone:user.phone
            })
            dispatch({
                type:'addrecord'
            })
        }catch(err){

        }
    }
}