import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div lang="en" onClick={jump}>
     <body>
    <h1></h1>
    <div className="game">
        <div id="character"></div>
        <div className="myImg" id="pokemon"></div> 
        <div id="flyingPokemon"></div>
    </div>
    <span id="scoreboard"></span>
    <p>Jumped Pokemon <span id="counter"></span></p>
    <div id="game-container">
        <img id="displayed-pokemon" src=""/>
      </div>

      <div id="image-container"></div>

    

</body>
    </div>
  )
}

export default App



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
