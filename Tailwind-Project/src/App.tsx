import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <h1 className="text-3xl text-orange-500 text-center">Stories</h1>
        <ul className='flex space-x-6'>
          <li className='flex flex-col items-center space-y-1'>
            <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
            <a className='block p-1 rounded-full bg-white transform transition hover:-rotate-6' href="#">
              <img className='h-24 w-24 rounded-full' src="https://picsum.photos/200" alt="Image" />
            </a>
            <button className='create-story'>+</button>
            </div>
            <a href="#">YOU</a>
          </li>
          <li className='flex flex-col items-center space-y-1'>
            <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
            <a className='block p-1 rounded-full bg-white transform transition hover:-rotate-6' href="#">
              <img className='h-24 w-24 rounded-full' src="https://picsum.photos/300" alt="Image" />
            </a>
            </div>
            <a href="#">PIC_ONE</a>
          </li>
          <li className='flex flex-col items-center space-y-1'>
            <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
            <a className='block p-1 rounded-full bg-white transform transition hover:-rotate-6' href="#">
              <img className='h-24 w-24 rounded-full' src="https://picsum.photos/400" alt="Image" />
            </a>
            </div>
            <a href="#">PIC_TWO</a>
          </li>
          <li className='flex flex-col items-center space-y-1'>
            <div className='bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
            <a className='block p-1 rounded-full bg-white transform transition hover:-rotate-6' href="#">
              <img className='h-24 w-24 rounded-full' src="https://picsum.photos/500" alt="Image" />
            </a>
            </div>
            <a href="#">PIC_THREE</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
