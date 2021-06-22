import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
