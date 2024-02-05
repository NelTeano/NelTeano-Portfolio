import axios from "axios";
import {  useEffect, useState } from "react"




export default function Contacts() {

    const [Contacts, setContacts] = useState({});

    
    
    

    useEffect(()=>{
        async function getContactsRoute(){
            try {
                const response = await axios.get('http://localhost:3010/api/contacts')

                if(!response){
                    console.log("getContactsRoute is undefined");
                    return
                }

                
                setContacts(response.data);
            } catch (error) {
                console.log("Fail to getContactsRoute", error)
            }
        }

        getContactsRoute();
        
    },[])
    
        
    console.log(Contacts);

    return (
        <>
            This is Contact Page
        </>
    )
}
