import React from 'react'
import {useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function useSignup() {
    
    const [error ,setError ] = useState(null);
    const [loading , setLoading ] = useState(false);

    const signUp = async (email,password) =>{

        try{

            setLoading(true);
            let res = await createUserWithEmailAndPassword(auth , email , password)
            setLoading(false);
            return res.user;
        }catch(e){
            setError(e.message);
            setLoading(false);
        }
    }
    return {error , loading , signUp}
}
