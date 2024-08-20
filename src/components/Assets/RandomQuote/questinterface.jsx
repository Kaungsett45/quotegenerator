import { doc, getDoc, getDocs, collection ,where, deleteDoc, setDoc ,query} from 'firebase/firestore';
import React from 'react'
import { db } from '../../../firebase';
import { useState ,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import refresh from '../../../assets/refresh.svg'


export default function questinterface() {
   
    let [quote ,setQuote] = useState([]);
    let [react ,setreact] = useState(true);
    const [fav , setFavcheck] = useState([]);
    let [search ,setSearch] = useState('');
    let [result , setResult] = useState([]);
    let handleSearch  =(e) =>{
     
      setSearch(e.target.value);
    }
    const fetchRandomQuote = async () => {
        
    setreact(true);
      try {
          let ref = collection(db, 'quotecollection');
          let querySnapshot = await getDocs(ref);
          const quotesArray = [];

          querySnapshot.forEach((doc) => {
              quotesArray.push({ id: doc.id, ...doc.data() });
          });

          if (quotesArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * quotesArray.length);
            const randomQuote = quotesArray[randomIndex];
            setQuote(randomQuote);
            
          } else {
              console.log('No quotes available.');
          }
      } catch (error) {
          console.error('Error fetching quotes:', error);
      }
  };
  useEffect(() => {
    const fetchSearchData = async () => {
      let q;
  
      try {
        if (search) {
          q = query(
            collection(db, 'quotecollection'),
            where('qdescription', '>=', search),
            where('qdescription', '<=', search + '\uf8ff')
          );
        } else {
          q = collection(db, 'quotecollection');
          console.log('not found ')
        }
  
        const querySnapshot = await getDocs(q);
        setResult(querySnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error fetching search data: ", error);
      }
    };
  
    fetchSearchData();
  }, [search]);
  




  useEffect(() => {
      fetchRandomQuote();

  }, []);
   useEffect(() => {
     console.log("Updated favorites:", fav); // This will log the updated value
   }, [fav]);


  let addFav = async (quid) =>{
       
    setreact(!react);
    console.log(react + 'New state');
    if (quid) {
      console.log('id: ' + quid);
      let ref = doc(db, 'quotecollection',quid );
  
      const docsnap =await getDoc(ref);
    
      if(docsnap.exists()){
        let { author,qdescription } =docsnap.data();
         console.log(author + 'author')
              let data={
                quid,
                author,
                qdescription
              }   
              
             if(react){
               let ref2 = collection(db, "favquote"); 
               const docRef = doc(ref2, quid); 


               const Checkfav = await getDoc(docRef);
                if (!Checkfav.exists()) {
                  await setDoc(docRef, data);
                 setFavcheck((prevData) => {
                   return [...prevData, quid];
                 });
                  console.log("Document written with ID: " + quid);
                } else {
                  let delref = doc(db, "favquote", quid);
                  await deleteDoc(delref);
                  setFavcheck((prevData) =>
                    prevData.filter((id) => id !== quid)
                  );
                  console.log("same id already exist");
                }
             }else{
                  let delref = doc(db, 'favquote', quid);
                  await deleteDoc(delref);
                     setFavcheck((prevData) =>
                       prevData.filter((id) => id !== quid)
                     );
                  console.log('delete datr')
                }
      }else{
        console.log('show not added error !!');
      }
  
  }
}


  return (
    <>
      <div className="mx-auto my-20 p-3 bg-[#67B26F] rounded-xl text-center  max-w-[560px]">
        {quote ? (
          <>
            <div key={quote.id}>
              <div className="border-2 p-2 bg-white rounded">
                <p>{quote.qdescription}</p>
              </div>
              <div className="flex justify-between items-align py-2">
                <p className="text-white">author :: {quote.author}</p>
                <div className="flex justify-around ">
                  <button
                    onClick={(e) => addFav(quote.id)}
                    className={`p-1 rounded ${
                       fav.includes(quote.id)
                          ? "bg-red-400 text-white"
                          : "bg-white"
                       
                    }`}
                  >
                    Fav
                  </button>
                  <button
                    className="flex items-align mx-2 bg-white p-1 rounded"
                    onClick={fetchRandomQuote}
                  >
                    <img src={refresh} alt="" />
                    Refresh
                  </button>
                  <Link to="/create" className=" bg-white p-1 rounded">
                    Create quote
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading ....</p>
        )}
      </div>

      <div className='flex justify-center '>
        <input type="text" className='w-full text-center p-2 border-2 border-red-200'placeholder="search for a quote" value={search} onChange={handleSearch} />
      </div>

      <ul >
     {search ?(
        result.length > 0 ?(
      result.map((quote, index) => (
          <li key={index} className='mx-auto my-20 p-3 bg-[#67B26F] rounded-xl text-center  max-w-[560px]'>
            <div className="border-2 p-2 bg-white rounded">
                {quote.qdescription}
            </div>
             <p >{quote.author}</p>
          </li>
        ))
        ):(
            <p className='text-red-500 text-center my-[100px]'>Search not found</p>
        )
        ):(
              <p className='text-red-500 text-center my-[100px]'>Please Search</p>
        )
        }
      
      </ul>
    </>
  );
}
