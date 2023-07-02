import Header from './components/Header'
import Home from './components/Home'
import Benefit from './components/Benefit'
import About from './components/About'
import Loading from './components/Loading'
import Token from './components/Token'
import Roadmap from './components/Roadmap'
import Panigation from './components/Panigation'
import bg from './assets/bg.png'
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from '@ap.cx/react-fullpage'
import { Parallax } from 'react-parallax'

function App() {
  const stylePagination = {
    paddingRight: 0,
    paddingLeft: '1rem',
    left: 0,
    right: 'unset',
    '& > div > div': {
      background: 'rgba(243, 220, 194, 1)',
    },
  }
  return (
    <div className="wrapper">
      {/* <Loading /> */}
      {/* <Panigation /> */}
      <Header />
      <Fullpage>
        <FullpageNavigation
          className="pagination-custome"
          style={stylePagination}
        />
        <FullPageSections>
          <FullpageSection>
            <Home />
          </FullpageSection>
          <FullpageSection>
            <Parallax strength={300} blur={{ min: -5, max: 10 }} bgImage={bg}>
              <About />
            </Parallax>
          </FullpageSection>
          <FullpageSection>
            <Parallax strength={300} blur={{ min: -5, max: 10 }} bgImage={bg}>
              <Token />
            </Parallax>
          </FullpageSection>
          <FullpageSection>
            <Parallax strength={300} blur={{ min: -5, max: 10 }} bgImage={bg}>
              <Benefit />
            </Parallax>
          </FullpageSection>
          <FullpageSection>
            <Parallax strength={300} blur={{ min: -5, max: 10 }} bgImage={bg}>
              <Roadmap />
            </Parallax>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  )
}

export default App
