import { useEffect, useState } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';

function App() {

const url='https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
const [todos, setTodos] = useState()

const fetchApi = async () => {
  const response = await (await fetch(url)).json()
  setTodos(response)
}

useEffect(()=>{
  fetchApi()
}, [])

  return (
    <div className="App">
      <div className='row'>
        { 
          !todos ? 'Cargando...' : 
          todos.map((todo,index) => (
            <CardComponent key={index} todo={todo}/>)
          )
        }
      </div>     
    </div>
  );
}

export default App;