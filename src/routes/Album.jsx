import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/Album.css'

export const loader = ({ params: { id } }) => {
  console.log(`${id}`)
  const albumPromise = fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  ).then((r) => r.json())
  const photosPromise = fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  ).then((r) => r.json())
  const usersPromise = albumPromise.then(album => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users?id=${album.userId}`
    ).then((r) => r.json())
  })
  return { albumPromise, photosPromise, usersPromise }
}

function Album() {
  const { albumPromise, photosPromise, usersPromise } = useLoaderData()

  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <Await resolve={albumPromise}>
        {(album) => (
          <div>
            <div className='albumTitle'>{album.title}</div>
            <Await resolve={usersPromise}>
              {(users) => (
                <div className='user'>Created by: <Link className='linkAlbum' to={`/users/${users[0].id}`}>{users[0].name}</Link></div>
              )}
            </Await>
          </div>
        )}
      </Await>
      <Await resolve={photosPromise}>
        {(photos) => (
          <div className='photos'>
            {Object.keys(photos).map((key) => (
              <img key={key} src={photos[key].thumbnailUrl}/>
            ))}
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export default Album