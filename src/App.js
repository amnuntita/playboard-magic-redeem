import './App.css';
import { useState } from 'react';

function App() {

  const [jwtPayload, setJWTPayload] = useState({
    userRefCode: 'user-id-1234',
    userDisplayName: 'John Doe',
    redeemCode: 'event123'
  })

  function signToken(payload){
    const signedToken = jwt.sign(payload, process.env.REACT_APP_PUBLIC_KEY)
    const rerunLink = process.env.REACT_APP_BASE_URL+signedToken
    return rerunLink 
  }

  return (
    <div className="App">
      <header>
        <h2>Ticket Platform</h2>
        
        <button>
          <a href={signToken(jwtPayload)} target='_blank'>รับชม Rerun Event</a>
        </button>
      </header>
    </div>
  );
}

export default App;
