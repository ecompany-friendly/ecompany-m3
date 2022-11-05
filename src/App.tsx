import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "./components/ButtonMode/ButtonLightmode";
import AuthProvider from "./contexts/authContext";
import Rotas from "./routes";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

const App = () => {
  const [themes, setThemes] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setThemes(themes.title === "dark" ? light : dark);
  };

  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <AuthProvider>
          <Rotas />
        </AuthProvider>
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
};

export default App;
