import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanFeatureMappingContext from "./context/PlanFeatureMappingContext";
import Dashboard from "./page/Dashboard";
import Portals from "./page/Portals";

// const AppContainer = styled('div')`
//   background: white;
// `

function App() {
  return (
    <PlanFeatureMappingContext>
      <BrowserRouter>
        <Routes>
          <Route path="/ufx/portals/*" exact element={<Portals />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>

      </BrowserRouter>
      
    </PlanFeatureMappingContext>
  );
}

export default App;
