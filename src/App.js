import './App.css';
import React, {useState} from "react";
import Container from "./components/Container";
import ThemedComponent from "./components/ThemedComponent";
import ThemedComponent2 from "./components/ThemedComponent2";
import Panel from "./components/Panel";
import {ThemeContext} from './providers/ThemeProvider';

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme: theme}}>     
        <Container>
          <button onClick={e=>setTheme("light")}>Light</button>
          <button onClick={e=>setTheme("dark")}>Dark</button>
        </Container>
        <Container>
          <Panel />
          <Container>
            <Container>
              <Container>
                <ThemedComponent />
                <Panel />
              </Container>
            </Container>
            <Panel />
          </Container>
        </Container>
        <ThemedComponent />
        <ThemedComponent2 />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
