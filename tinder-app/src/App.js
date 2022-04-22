import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Routes>
            <Route 
              path='/chat/:person' 
              element={
                <>
                  <Header backButton="/chat" />
                  <ChatScreen />
                </>
              } 
            />
            <Route 
              path='/chat' 
              element={
                <>
                  <Header backButton="/" />
                  <Chats />
                </>
              } 
            />
            <Route 
              path='/' 
              element={
                <>
                  <Header />
                  <TinderCards />
                  <SwipeButtons />
                </>
              } 
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
