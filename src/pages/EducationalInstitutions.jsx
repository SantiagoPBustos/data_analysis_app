import TypeSanitaryConcept from "../components/customizedReports/TypeSanitaryConcept";
import WorstMunicipalitiesPercentage from "../components/customizedReports/WorstMunicipalitiesPercentage";
import GeneralReports from "../components/customizedReports/GeneralReports";
import TypeInstitution from "../components/customizedReports/TypeInstitution";
import LocationConditions from "../components/customizedReports/LocationConditions";
import SanitaryConditions from "../components/customizedReports/SanitaryConditions";
import ConditionsOfSanitation from "../components/customizedReports/ConditionsOfSanitation";
import RiskManagementConditions from "../components/customizedReports/RiskManagementConditions";
import LaboratoryConditions from "../components/customizedReports/LaboratoryConditions";
import MyReaderExcel from "../components/fileHandler/MyReaderExcel";
import { principalContext } from "../context/principalContext";
import logo from "../assets/logo.png";
import { useContext } from "react";
import ExportExcel from "../components/fileHandler/ExportExcel";

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
          <ExportExcel></ExportExcel>
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
