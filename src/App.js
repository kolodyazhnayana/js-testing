import './App.css'
import {useEffect, useState} from "react"

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async function() {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (res.ok) {
                let json = await res.json()
                let filterRes = json.filter(item => item.id % 2 === 0)
                setUsers(filterRes)
            } else {
                console.log(res.status)
            }
        })()
    }, [])

  return (
    <div className="app">
        <div className='container'>
            <h2>Name, surname, email</h2>
            {
                users.map(item => <span key={item.id}>{`${item.name} -> ${item.email}`}</span>)
            }
        </div>

    </div>
  )
}

export default App
