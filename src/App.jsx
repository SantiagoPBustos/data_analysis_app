import EducationalInstitutions from "./pages/EducationalInstitutions";
import PrincipalProvider from "./components/providers/PrincipalProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <PrincipalProvider>
      <EducationalInstitutions />
    </PrincipalProvider>
  );
}

export default App;
