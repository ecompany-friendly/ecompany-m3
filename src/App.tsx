import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "./components/ButtonMode/ButtonLightmode";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

const App = () => {
  
  const [ themes, setThemes ] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = () => {
    setThemes(themes.title === "dark" ? light : dark)
  }

  return (
    <>
      <ThemeProvider theme={themes} >
        <GlobalStyles />
        <Dashboard />
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
};

export default App;
