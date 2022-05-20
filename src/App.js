import './App.css'
import {useEffect, useState} from "react"
import UserCard from "./components/userCard"

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async function() {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (res.ok) {
                let data = await res.json()

                // every other element
                let filterData = data.filter(item => item.id % 2 === 0)
                setUsers(filterData)

                // every third element -> address.geo.lat === null and address.geo.lng === null
                data.forEach(item => {
                    if (item.id % 3 === 0) {
                        item.address.geo.lat = null
                        item.address.geo.lng = null
                    }
                    return item
                })

            } else {
                console.log(res.status)
            }
        })()
    }, [])

    // name, surname -> email
    const mainData = users.map(item => {
        let {name, email} = item
        return [name, email].join(' -> ')
    })

    // lat and lng
    const address = users.map(item => {
        let {lat, lng} = item.address.geo
        if (!lat) lat = 'не определен'
        if (!lng) lng = 'не определен'
        return {lat, lng}
    })

    // list of ids
    const ids = users.reduce((prev, current) => {
        return [...prev, current.id]
    }, [])

    return (
        <div className="app">
            <h2>Ids</h2>
            {
                ids.map(item => <span key={item}>{item}</span>)
            }
            <h2>Users</h2>
            {
                users.map(item => <UserCard key={item.id} {...item} />)
            }
            <h2>Main data</h2>
            {
                mainData.map((item, index) => <div key={index}>{item}</div>)
            }
            <h2>Lat and lng</h2>
            {
                address.map((item, index) => <div key={index}>lat: {item.lat}, lng: {item.lng}</div>)
            }
        </div>
    )
}

export default App
