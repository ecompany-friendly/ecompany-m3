import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "./components/ButtonMode/ButtonLightmode";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";
import RoutesMain from "./routes";
import AuthProvider from "./contexts/authContext";

const App = () => {
  const [themes, setThemes] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setThemes(themes.title === "dark" ? light : dark);
  };

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={themes}>
          <GlobalStyles />
          <RoutesMain />
          {/* <Header toggleTheme={toggleTheme} /> */}
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
