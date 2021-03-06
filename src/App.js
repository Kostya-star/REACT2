import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login.jsx'
import { Component } from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/preloader/Preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    
    // !this.props.initialized && <Preloader/>
    if (!this.props.initialized) return <Preloader/>


    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Routes>
              
              <Route path ='/profile/:userId' 
              element={<ProfileContainer />} />
              <Route path='/profile/*' element={<ProfileContainer />} />

              <Route path ='/dialogs/*' 
              element={<DialogsContainer />} />
              
              <Route path ='/news' element={<News/>} />
              <Route path ='/music' element={<Music/>} />
              <Route path ='/settings' element={<Settings/>} />

              <Route path ='/users' 
              element={<UsersContainer/>} />

              <Route path ='/login' 
              element={<LoginPage/>} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter >)
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp}) (App);
