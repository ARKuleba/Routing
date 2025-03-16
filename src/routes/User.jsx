import React, { Suspense } from 'react'
import { Await, Link, useLoaderData } from 'react-router-dom'
import '../css/User.css'

export const loader = ({ params: { id } }) => {
  console.log(`${id}`)
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((r) => r.json())
  const albumsPromise = fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  ).then((r) => r.json())
  return { userPromise, albumsPromise }
}

function User() {
  const { userPromise, albumsPromise } = useLoaderData()

  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <div className="box">
        <Await resolve={userPromise}>
          {(user) => (
            <div>
              <div className='nameUser'>{user.name}</div>
              <div className='username'>Username: {user.username}</div>
              <div className='email'>Email: {user.email}</div>
              <div className='phone'>Phone: {user.phone}</div>
              <div className='site'>Site: {user.website}</div>
            </div>
          )}
        </Await>
        <Await resolve={albumsPromise}>
          {(albums) => (
            <div style={ {display: 'flex', flexDirection: 'column'} }>
              <p>Albums</p>
              {albums.map((album) => (
                <Link className='albumLink' key={album.id} to={`/albums/${album.id}`}>
                  {album.title}
                </Link>
              ))}
            </div>
          )}
        </Await>
      </div>
    </Suspense>
  )
}

export default User