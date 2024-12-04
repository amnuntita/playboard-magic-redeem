import "./App.css";
import { useState } from "react";

function App() {
  const [domain, setDomain] = useState(
    "https://www.playboard-develop-1.poring.arkcube.com"
  );
  const [brandSlug, setBrandSlug] = useState("some-event-brand");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const getLink = () => domain + "/" + brandSlug + "/magic-redeem?token=" + inputValue;

  return (
    <div className="App">
      <h2>Ticket Platform</h2>
      <p>
      The JWT payload needs to look like this <br></br>
        userRefCode: string <br></br>
        userDisplayName: string <br></br>
        redeemCode: string <br></br> 
      </p>
      <p>Redeem Code and public key needs to matched the one you set up on Playboard
        <br/> See how to setup everything on Playboard: <a href="https://linear.app/inox/issue/PDP-1231/ผู้ชมสามารถรับชม-event-ได้โดยไม่ต้องสร้าง-account">Here</a>
      </p>
      <div>
        Domain:{" "}
        <input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        ></input>
      </div>
      <div>
        Your brand slug:{" "}
        <input
          value={brandSlug}
          onChange={(e) => setBrandSlug(e.target.value)}
        ></input>
      </div>
      <p>
        Input your signed token here Ref:{" "}
        <a href="https://dinochiesa.github.io/jwt/">JWT Generator</a>
        <br></br>
      </p>
      <textarea rows={10} value={inputValue} onChange={handleChange} />
      <button>
        <a href={getLink()} target="_blank" rel="noreferrer">
          รับชม Rerun Event
        </a>
      </button>
    </div>
  );
}

export default App;
