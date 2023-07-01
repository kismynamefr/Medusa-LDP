import Header from './components/Header'
import Home from './components/Home'
import Benefit from './components/Benefit'
import About from './components/About'
import Loading from './components/Loading'
import Token from './components/Token'
import Roadmap from './components/Roadmap'
import Panigation from './components/Panigation'

function App() {
  return (
    <div className="wrapper">
      {/* <Loading /> */}
      <Panigation />
      <Header />
      <Home />
      <About />
      <Token />
      <Benefit />
      <Roadmap />
    </div>
  )
}

export default App
