import React from 'react'
import { useState ,useEffect } from 'react';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
export default function FavQuote() {
   let [quote, setquote] = useState([]);

   useEffect(() => { 
    

     let ref = collection(db, "favquote");

     getDocs(ref).then((docs) => {
       docs.forEach((doc) => {
         let quoto = [];
         docs.forEach((doc) => {
           let quots = { id: doc.id, ...doc.data() };
           quoto.push(quots);
         });
         setquote(quoto);
         console.log(quote);
       });
     });
   }, []);
  return (
    <>
      <div>
        <h2 className="text-center my-12 text-base font-bold">
         Favourite Quotes
        </h2>

        <div className="p-2 grid grid-cols-3">
          {quote.map((q) => (
            <div key={q.id} className="bg-[#9CDBA6] p-2 m-1  ">
              <p className="text-center bg-white p-2 m-2 rounded-lg ">
                {q.qdescription}
              </p>
              <p className="border-2 m-2   rounded-lg flex-wrap text-center">
                author :{q.author}
              </p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}
