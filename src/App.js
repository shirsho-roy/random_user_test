import {useState} from 'react';
import './App.css';


function App() {
  const url='https://randomuser.me/api/';
  //State hook for array
  const [query,setQuery]=useState([]);
  //Fetch user info
      const fetchData = async () => {
        const res = await fetch(url);
        const {results} = await res.json();
        setQuery(results);
        
      };
  return (
    <div className="App">
       <h1> Fetch data from an api in react </h1>  
       <button onClick={fetchData}>Change</button>
       {        //Map the query
                query.map((item) => ( 
                <div >
                  <h1>data display</h1>
                    <h2>Full Name: { item.name.first } {item.name.last}</h2> 
                    <h3>User Email: { item.email }</h3>
                    <h3>Age: {item.registered.age}</h3>
                    </div>
                ))
            }
          
    </div>
  );
}

export default App;
