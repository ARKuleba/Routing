import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import '../css/Users.css'

export const loader = async () => {
    const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    )
        .then((r) => r.json())
    return { users }
}

function Users() {
  const {users} = useLoaderData()

  return (
    <div>
        <h1 className='userName'>Name of users</h1>
        {users.map((user) => (
            <Link className='userLink' key={user.id} to={`/users/${user.id}`}>
                <div className='userLink'>{user.name}</div>
            </Link>
        ))}    
    </div>
  )
}

export default Users