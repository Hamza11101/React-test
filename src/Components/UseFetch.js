import { useEffect,useState } from "react";



const useFetch = (url) =>{



const [Data, setData] = useState(null)
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)


  useEffect(() => {

      const abortCont = new AbortController();
//npx json-server --watch data/db.json --port 8000
      fetch(url, {signal:abortCont.signal})
      .then(res =>{
          if(!res.ok){
              throw Error("could not fatch the data from resource")
          }
          return res.json();
      })
      .then(data =>{
           setData(data);
          setloading(false);
          seterror(null)
      })
      .catch(err=>{
          if(err.name === 'AbortError'){
 console.log('fetch abort');
          }
          else{
            setloading(false)
            seterror(err.message)
          }
          

      });
      return ()=>abortCont.abort();
      
  }, []);

  return{Data,loading,error}

}
  export default useFetch