

import Axios from "axios"
import { useState, useEffect } from 'react'

function App() {
    // const users = [
    //   { id: 1, name: "mariem", age: 33, email: "test" },
    //   { id: 2, name: "mariem2", age: 33, email: "test2" }
    // ]

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    //Get
    useEffect(() => {
        Axios.get("http://localhost:3001/user")
            .then(res => {
                setUsers(res.data)
            })
    }, [users])
    //post 
    const CreateUser = () => {
        Axios.post("http://localhost:3001/Create", {
            name: name,
            age: age,
            email: email
        })
    }

    return (
        <>
            {users.map(user => {
                return (
                    <ul>
                        <li>Name:{user.name}</li>
                        <li>Age:{user.age}</li>
                        <li>Email:{user.email}</li>
                    </ul>)
            })}

            <div>
                <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="age" onChange={e => setAge(e.target.value)} />
                <input type="text" placeholder="e-mail" onChange={e => setEmail(e.target.value)} />
                <button onClick={CreateUser}>Create User</button>
            </div>
        </>
    )
}
