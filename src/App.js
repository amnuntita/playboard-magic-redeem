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
      <div>
        Domain:{" "}
        <input
          value={domain}
          handleChange={(e) => setDomain(e.target.value)}
        ></input>
      </div>
      <div>
        Your brand slug:{" "}
        <input
          value={brandSlug}
          handleChange={(e) => setBrandSlug(e.target.value)}
        ></input>
      </div>
      <p>
        Input your signed token here Ref:{" "}
        <a href="https://dinochiesa.github.io/jwt/">JWT Generator</a>
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
