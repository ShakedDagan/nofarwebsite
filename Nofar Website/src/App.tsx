
import Home from './pages/home'
import { MainContainer, Page } from './App.css'
import NavigationBar from './common/navigationBar/navigationBar'

const App = () => {

  return (
    <MainContainer>
      <NavigationBar/>
      <Page>
        <Home/>
      </Page>
    </MainContainer>
  )
}

export default App;
