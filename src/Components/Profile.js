import {useState,useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import useFetch from './UseFetch';

const Profile = () => {

 const [temperature,settemperature] = useState('');
 const [location, setlocation] = useState('');
 const [IsLoading, setIsLoading] = useState(false)

const { id } = useParams();
const { Data } = useFetch('http://localhost:8000/Users/' + id);
// const { Data} = useFetch('http://localhost:8000/' + id);
// useEffect(() => {
    
//       setData(`http://localhost:8000/Users/${id}`);
      console.log(Data);
  
// }, [])







const handeleclick =()=>{
    
        axios
        .get(`http://api.weatherstack.com/current?access_key=3ad490972ca62027b8d67ce49fdb9370&query=${location}`,setIsLoading(true))
        .then((response)=>{settemperature(response.data.current.temperature);},setIsLoading(false))
         .catch(err=>{
             setIsLoading(true)
      console.log("error")
         })

         
         
      

}




    return (  
        <div>
 
 
 
            
            <h1 className='text-center bold '>
      Hi , You can get your position Temperature by simple Click</h1> 
      <label className='mt-6'>write your desired location: </label>
      <input value={location} type="text"  onChange={(e)=>setlocation(e.target.value)}></input><br/>
            <button onClick={handeleclick} className='btn btn-danger'>Click Now</button>
      {IsLoading && <div>Loading...</div>}
        <p className='mt-5 '>Temperature now is :{temperature} °C <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg> </p>
        
        {/* <div className='card border-3 border-danger'>
            <p>Do you want to change your profile data?</p>
            <p>your fisrt name is: {Data.FName}</p>
            <p>your last name is: {Data.LName}</p>
            <p>your Email is: {Data.Email}</p>
            <p>your passeworld is: {Data.PassWord}</p>
            <button className='btn btn-success mt-3 mb-2'>Update</button>
        </div>  */}
        
        </div>
    );
}
 
export default Profile;