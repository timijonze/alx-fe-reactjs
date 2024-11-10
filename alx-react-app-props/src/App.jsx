import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ProfilePage from "./components/ProfilePage";
import { UserProvider } from "./components/UserContext";

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ProfilePage userData={userData} />;
      </div>
      <div>
        <UserProvider>
          <ProfilePage />
        </UserProvider>
      </div>
      <div>
      <UserContext.Provider value = {{ userData, setUserData }}>
        {children}
    </UserContext.Provider>
      </div>
    </>
  );
}

export default App;