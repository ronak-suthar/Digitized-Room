import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Available from './Components/Available';

const firebaseConfig = {

  apiKey: "AIzaSyBDab4AEdg22sjqC24eSsTcrQRW9o-pbM0",

  authDomain: "digitized-room.firebaseapp.com",

  databaseURL: "https://digitized-room-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "digitized-room",

  storageBucket: "digitized-room.appspot.com",

  messagingSenderId: "710461188047",

  appId: "1:710461188047:web:21632af084f493e17d54ba"

};
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner></Banner>
      <Available></Available>
    </div>
  );
}

export default App;
