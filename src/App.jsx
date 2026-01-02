import { useState } from 'react'
import './App.css'

function App() {
  // const [isLimitReached, setIsLimitReached] = useState(false)
  const [typeOfPost, setTypeOfPost] = useState('Bio')
  const limit = typeOfPost === 'Bio' ? 25 : 50

  const [value, setValue] = useState('')

  const handleTogglePosts = () => {
    if (typeOfPost === 'Bio') {
      setTypeOfPost('Tweet')
    } else {
      setTypeOfPost('Bio')
    }
  }

  const handleChange = (e) => {
    if (e.target.value.length < limit + 1) {
      setValue(e.target.value)
    } else {
      // console.log('Not Changed')
    }
    // console.log(e.target.value.length)
  }

  return (
    <div className='w-full h-full bg-slate-300 flex justify-center items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <div onClick={handleTogglePosts}>
          <h1 className='select-none'>
            Change Post Type: <span className='text-3xl'>{typeOfPost}</span>
          </h1>
        </div>
        <div className='flex flex-col gap-6 items-end'>
          <textarea
            onChange={handleChange}
            cols={50}
            rows={6}
            value={value}
            placeholder='Type something...'
            className={`${
              value.length < limit
                ? 'bg-green-200 outline-green-500'
                : 'bg-red-200 outline-red-500 text-red-600'
            } resize-none text-xl outline-0  focus:outline-2 transition-colors duration-200 p-2`}
          ></textarea>
          <button
            className={`${
              value.length < limit
                ? 'bg-green-200 outline-green-500 cursor-pointer'
                : 'bg-red-200 outline-red-500 text-red-600 cursor-not-allowed'
            } outline w-fit px-6 py-1 rounded-xl text-xl `}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
