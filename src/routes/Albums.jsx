import { Link, useLoaderData } from 'react-router-dom'
import '../css/Albums.css'

export const loader = async () => {
    const albums = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
    )
        .then((r) => r.json())
    return { albums }
}

function Albums() {
  const {albums} = useLoaderData()

  return (
    <div className='albums'>
        <h1 className='albumName'>Name of albums</h1>
        {albums.map((album) => (
            <Link className='albumLink' key={album.id} to={`/albums/${album.id}`}>
                <div className='albumLink'>{album.title}</div>
            </Link>
        ))}    
    </div>
  )
}

export default Albums