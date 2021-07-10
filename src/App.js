import "./App.css";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <TopNavBar /> */}
        <Sidebar />
      </ThemeProvider>
    </div>
  );
}

export default App;
