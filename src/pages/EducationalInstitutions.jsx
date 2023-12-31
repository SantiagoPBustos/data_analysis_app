import TypeSanitaryConcept from "../components/customizedGraphs/TypeSanitaryConcept";
import WorstMunicipalitiesPercentage from "../components/customizedGraphs/WorstMunicipalitiesPercentage";
import GeneralReports from "../components/customizedGraphs/GeneralReports";
import TypeInstitution from "../components/customizedGraphs/TypeInstitution";
import LocationConditions from "../components/customizedGraphs/LocationConditions";
import SanitaryConditions from "../components/customizedGraphs/SanitaryConditions";
import ConditionsOfSanitation from "../components/customizedGraphs/ConditionsOfSanitation";
import RiskManagementConditions from "../components/customizedGraphs/RiskManagementConditions";
import LaboratoryConditions from "../components/customizedGraphs/LaboratoryConditions";
import MyReaderExcel from "../components/fileHandler/MyReaderExcel";
import { principalContext } from "../context/principalContext";
import logo from "../assets/logo.png";
import { useContext } from "react";

export function Home() {
  const { dataLoading, datasLaboratoryConditions } =
    useContext(principalContext);

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="principal-container">
        <button className="btn-logo" onClick={handleReloadClick}>
          <img src={logo} alt="logo-secretaria-tunja" />
        </button>
      </div>

      <MyReaderExcel />
      {!dataLoading ? (
        <div className="main-content">
          <h4>Cargue archivo para generacion de reportes</h4>
        </div>
      ) : (
        <div className="container-graphics">
          <GeneralReports />
          <WorstMunicipalitiesPercentage />
          <TypeInstitution />
          <TypeSanitaryConcept />
          <LocationConditions />
          {datasLaboratoryConditions != null ? <LaboratoryConditions /> : <></>}
          <SanitaryConditions />
          <ConditionsOfSanitation />
          <RiskManagementConditions />
        </div>
      )}
      <div className="container-footer">
        <p>
          Este aplicativo es para uso exclusivo de la Secretaria de Salud de
          Boyaca. © 2023.
        </p>
      </div>
    </>
  );
}

export default Home;
