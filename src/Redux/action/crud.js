import { addDoc, collection,  deleteDoc,  doc,  getDoc,  getDocs, getFirestore } from "firebase/firestore"
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
                email:user.email,
                password:user.password,
                gender : user.gender,
                course : user.course,
                department : user.department,
                date : user.date
            })
            dispatch({
                type:'addrecord'
            })
        }catch(err){
            dispatch({
                type:'adderror',
                payload:err,
            });
        }
    }
}


export const deleteRecord = (id) =>{
    return async(dispatch)=>{
        try{
            let deleteData= await doc(db,'Firebase-Firestore',id);
            await deleteDoc(deleteData);
            alert("delete sucessfully...");
            dispatch({
                type:'delete',
                payload:id
            })

        }catch(err){
            dispatch({
                type:'deleteerror',
                payload:err,
            });
        }
    }
}

export const editUser = (id) =>{
    
    return async(dispatch)=>{
        try{
            let record = await doc(db,'Firebase-Firestore',id);
            
            let single = await getDoc(record);
            
            dispatch({
                type:'edit',
                payload:single.data()
            })
        }catch(err){
            dispatch({
                type:'editerror',
                payload:err,
            });
        }
    }
}