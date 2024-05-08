import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Assesment from "./pages/assesment";
import { CanvasProvider } from "./components/canvascontext";

function App() {

  return (
    <CanvasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/assesment" element={<Assesment></Assesment>}/>
        </Routes>
      </BrowserRouter>
      </CanvasProvider>
  );
}
export default App;