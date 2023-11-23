import TypeSanitaryConcept from "../components/CustomizedGraphs/TypeSanitaryConcept";
import WorstMunicipalitiesPercentage from "../components/CustomizedGraphs/WorstMunicipalitiesPercentage";
import GeneralReports from "../components/CustomizedGraphs/GeneralReports";
import TypeInstitution from "../components/CustomizedGraphs/TypeInstitution";
import LocationConditions from "../components/CustomizedGraphs/LocationConditions";
import SanitaryConditions from "../components/CustomizedGraphs/SanitaryConditions";
import ConditionsOfSanitation from "../components/CustomizedGraphs/ConditionsOfSanitation";
import RiskManagementConditions from "../components/CustomizedGraphs/RiskManagementConditions";
import LaboratoryConditions from "../components/CustomizedGraphs/LaboratoryConditions";
import MyReaderExcel from "../components/FileReader/MyReaderExcel";
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
