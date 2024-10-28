
import './App.css'
import BarChart from './assets/component/BarChart/BarChart'
import LinChart from './assets/component/LinChart/LinChart'
import Navber from './assets/component/Navber/Navber'
import Phones from './assets/component/Phones/Phones'
import PriceOptions from './assets/component/PriceOptions/PriceOptions'

// import DaisyNav from './assets/component/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      <Navber></Navber>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl font-bold bg-red-700'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LinChart></LinChart>
      <BarChart></BarChart>
      <Phones></Phones>
    </>
  )
}

export default App
