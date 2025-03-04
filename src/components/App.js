
import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from './Loading'

const App = () => {

  const[tours , setTours] =useState([]);
  const[isLoading , setisLoading] = useState(false)

  //fetching data from api
  const fetchData =()=>{
    // loding
    setisLoading(true)
   fetch('https://www.course-api.com/react-tours-project').then((response)=>{
    return response.json();
    
   }).then((data)=>{
    //loading
    setTours(data)

    setisLoading(false);
   }).catch((error)=>console.log('Errror:', error))

    }
  

    // useEffect for unnessary sideffect prevent unnessary rendring
  useEffect(() => {
    fetchData()
  }, [])


  // remove items form the seTours 

  const removeItems = (id)=>{
      const fiterArr = tours.filter((items)=> items.id !== id)
      setTours(fiterArr)
  }
  
    return(
      <div>
      {
        tours.length===0 ? <div>
              <h1>No Items found</h1>
              <button onClick={()=>fetchData()}>Refresh</button> 
        </div>
         : <main id="main">
        {
          isLoading ? <Loading/> : <Tours tours={tours} removeItems={removeItems}/>
        }
      </main>
      }
      </div>
    )
}
export default App;
