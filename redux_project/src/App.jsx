import React from 'react'
import {fetchPhotos, fetchVideos} from './Api/Apimedia'

const App = () => {
  return (
    <div>
      <h1 className='text-6xl'>hello</h1>
      <button onClick={async()=> {
        const data = await fetchPhotos('cat')
        console.log(data.results);
        
      }
      }>get photos</button>

      <button onClick={async()=> {
        const data = await fetchVideos('cat')
        console.log(data.videos);
        
      }
      }>get video</button>
    </div>
  )
}

export default App
