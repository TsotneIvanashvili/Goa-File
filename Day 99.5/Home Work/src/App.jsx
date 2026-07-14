import { useEffect, useState } from 'react'
import './App.css'
import FetchData from './utils/Fetch'

function App() {

  const [user, setUser] = useState("")
  const [mode, setMode] = useState(false)


  useEffect( () => {
    FetchData(`https://api.github.com/users/${user}`)
    
    
  },[user])



  return (






    <main className='bg-[#141C2F] flex flex-col justify-center items-center gap-10 w-full h-screen'>
      <div>
        <p>DevFinder</p>
        <button></button>
      </div>
      <form className='flex w-full justify-center items-center' >
        <input className='bg-[#202947] p-3 rounded-xl w-[50%]' onChange={(e) => setUser(e.target.value)} type="search" name='userName' placeholder='Search GitHub username...' />

      </form>

      <div className='flex justify-center rounded-xl items-center w-full'>
        {
          user === "" ? 
          <div className='flex w-[50%] bg-[#202947] '>
            <div className='bg-white rounded-full p-2  h-fit'>
              <img src="public/octocat.png" className='w-20 h-fit ' alt="" />
            </div>
            <div>
              <div>
                <p>{}</p>
                <p>Joined 17 Oct 2008</p>
              </div>
              <p>octocat</p>
              <p>This profile has no bio</p>
              <div>
                <div>
                  <p>Repos</p>
                  <p>8</p>
                </div>
                <div>
                  <p>Followers</p>
                  <p>6767</p>
                </div>
                <div>
                  <p>Following</p>
                  <p>9</p>
                </div>
              </div>

              <div>
                <div>
                  <h1>San Francisco</h1>
                  <a href="https://github.blog">https://github.blog</a>
                </div>
                <div>
                  <h1>Not Available</h1>
                  <h1>github</h1>
                </div>
              </div>
            </div>
          </div>
          :
          <div className='flex w-[50%] bg-[#202947] '>
            <div className='bg-white rounded-full p-2  h-fit'>
              <img src="public/octocat.png" className='w-20 h-fit ' alt="" />
            </div>
            <div>
              <div>
                <p>The Octocar</p>
                <p>Joined 17 Oct 2008</p>
              </div>
              <p>octocat</p>
              <p>This profile has no bio</p>
              <div>
                <div>
                  <p>Repos</p>
                  <p>8</p>
                </div>
                <div>
                  <p>Followers</p>
                  <p>6767</p>
                </div>
                <div>
                  <p>Following</p>
                  <p>9</p>
                </div>
              </div>

              <div>
                <div>
                  <h1>San Francisco</h1>
                  <a href="https://github.blog">https://github.blog</a>
                </div>
                <div>
                  <h1>Not Available</h1>
                  <h1>github</h1>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </main>
   
  )
}

export default App
