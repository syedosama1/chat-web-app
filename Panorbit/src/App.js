import "./App.css";
import ContextProvider from "./contextApi/ContextProvider";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <AllRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
