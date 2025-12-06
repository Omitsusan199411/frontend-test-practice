import { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState<string[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                const jsonData = res.json()
                return jsonData
            })
            .then((data) => {
                console.log(data)
                setUsers(data.map((user: { name: string }) => user.name))
            })
            .catch((error) => {
                setError('Error')
            })
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users
