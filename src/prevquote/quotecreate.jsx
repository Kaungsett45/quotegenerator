import React from 'react'
import { useEffect ,useState } from 'react';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
export default function quotecreate() {


  let [ author , setauthor ] = useState('');
  let [ qdescription , setqdesc ] = useState('');
  let navigate = useNavigate();



  

  let submitForm =async (e)=>{
    e.preventDefault();

    let data ={
      author,
      qdescription
    }
    console.log(author );
    console.log(data + 'input value')
    let ref = collection(db , 'quotecollection');
    await addDoc(ref , data);
    navigate('/');
  }


  return (
    

    <form class="max-w-sm mx-auto my-20" onSubmit={submitForm}>
      <div class="mb-5">
        <label for="author" class="block mb-2 text-sm font-medium text-gray-900 ">Author</label>
        <input type="text" value={author} onChange={e => setauthor(e.target.value)}  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-5">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
        <input type="text" id="password" value={qdescription}  onChange={e => setqdesc(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
    </form>

  )
}
