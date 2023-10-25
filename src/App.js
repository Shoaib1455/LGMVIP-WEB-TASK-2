import './App.css';
import React ,{useState} from 'react'; 
function App() {
  const [users,setUsers] = useState([]);
  const loadUsersData  = async()=>{
  const responseData = await fetch ("https://reqres.in/api/users?page=1")
  const jsonResponse = await responseData.json(); 
    setUsers(jsonResponse.data)
    console.log(jsonResponse.data)
    
}
  return (
    <div className="App">
      <div className="container-fluid mt-5">
      <div class="d-flex justify-content-between align-items-center">
      <h1 class="heading-1">
          Shoe Store
      </h1>
      <button class="button" onClick={loadUsersData}>Get Data</button>   
      </div>
      </div>

      <ul id ="data" >
      <div className="container">
      <div className="row">
            {users.map((v,i) =>(
              <div className='col-md-4 col-sm-6 card mt-5'>
            <img src={v.avatar} classname="img-fluid"/>
            <li key = {i}>Name :{v.first_name + " " + v.last_name }
            <br/>
            {v.email}  
             </li>
          
            </div>
        ))}
        </div>
        </div>
      </ul>
    </div>

  );
}
export default App;
