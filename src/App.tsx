
import Home from './pages/home/home'
import { MainContainer, Page, InnerContainer } from './App.css'
import NavigationBar from './common/navigationBar/navigationBar'
import Footer from './common/footer/footer'

const App = () => {

  return (
    <MainContainer>
      <NavigationBar/>
      <InnerContainer>
        <Page>
          <Home/>
        </Page>
        <Footer/>
      </InnerContainer>
    </MainContainer>
  )
}

export default App;
