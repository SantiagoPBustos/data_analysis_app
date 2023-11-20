import React, { useState } from "react";
import { principalContext } from "../../context/principalContext";

const PrincipalProvider = ({ children }) => {
  const [totalData, setTotalData] = useState(null);
  const [cityModal, setCityModal] = useState(null);
  const [totalInstitutions, setTotalInstitutions] = useState("");
  const [educationInstitutions, setEducationInstitutions] = useState("");
  const [totalChilhood, setTotalChilhood] = useState("");
  const [totalCenterChildren, setTotalCenterChildren] = useState("");
  const [totalCenterRural, setTotalCenterRural] = useState("");
  const [dataLoading, setDataLoading] = useState(null);
  const [loadingState, setLoadingState] = useState(null);
  const [datasLocationConditions, setDatasLocationConditions] = useState(null);
  const [datasSanitaryConditions, setDatasSanitaryConditions] = useState(null);
  const [datasTypeInstitutions, setDatasTypeInstitutions] = useState(null);
  const [dataTypeConceptSanitary, setDataTypeConceptSanitary] = useState(null);
  const [stateModalGraphic, setStateModalGraphic] = useState(false);
  const [datasConditionsOfSanitation, setDatasConditionsOfSanitation] =
    useState(null);
  const [superiorEducationInstitutions, setSuperiorEducationInstitutions] =
    useState("");
  const [datasLaboratoryConditions, setDatasLaboratoryConditions] =
    useState(null);
  const [datasRiskManagementConditions, setRiskManagementConditions] =
    useState(null);
  const [datasWorstMunicipalities, setDatasWorstMunicipalities] =
    useState(null);

  const handleCityModal = (city) => {
    setCityModal(city);
  };

  const changeStateModal = (value) => {
    setStateModalGraphic(value);
  };

  const handleSaveData = (data) => {
    setTotalData(data);
  };

  const loadWorstMunicipalities = (data) => {
    setDatasWorstMunicipalities(data);
  };
  const loadTypeConceptSanitary = (data) => {
    setDataTypeConceptSanitary(data);
  };
  const loadTypesInstitutions = (data) => {
    setDatasTypeInstitutions(data);
  };
  const loadSanitaryConditions = (data) => {
    setDatasSanitaryConditions(data);
  };
  const loadRiskManagement = (data) => {
    setRiskManagementConditions(data);
  };
  const loadLocationConditions = (data) => {
    setDatasLocationConditions(data);
  };
  const loadLaboratoryConditions = (data) => {
    setDatasLaboratoryConditions(data);
  };
  const handleChangeInstitutions = (value) => {
    setTotalInstitutions(value);
  };

  const handleEducationInstitutions = (value) => {
    setEducationInstitutions(value);
  };

  const handleSuperiorEducation = (value) => {
    setSuperiorEducationInstitutions(value);
  };

  const handleTotalChilhood = (value) => {
    setTotalChilhood(value);
  };

  const handleTotalCenterChildren = (value) => {
    setTotalCenterChildren(value);
  };

  const handleTotalCenterRural = (value) => {
    setTotalCenterRural(value);
  };

  const handleDataLoading = (value) => {
    setDataLoading(value);
  };

  const handleLoadingState = (value) => {
    setLoadingState(value);
  };
  const loadConditionsSanitation = (data) => {
    setDatasConditionsOfSanitation(data);
  };
  return (
    <principalContext.Provider
      value={{
        totalData,
        stateModalGraphic,
        datasConditionsOfSanitation,
        datasLaboratoryConditions,
        datasLocationConditions,
        datasSanitaryConditions,
        datasRiskManagementConditions,
        datasTypeInstitutions,
        dataTypeConceptSanitary,
        datasWorstMunicipalities,
        loadWorstMunicipalities,
        loadConditionsSanitation,
        loadLaboratoryConditions,
        loadLocationConditions,
        loadSanitaryConditions,
        loadTypesInstitutions,
        loadTypeConceptSanitary,
        loadRiskManagement,
        totalInstitutions,
        educationInstitutions,
        superiorEducationInstitutions,
        totalChilhood,
        totalCenterChildren,
        totalCenterRural,
        dataLoading,
        loadingState,
        handleChangeInstitutions,
        handleEducationInstitutions,
        handleSuperiorEducation,
        handleTotalChilhood,
        handleTotalCenterChildren,
        handleTotalCenterRural,
        handleDataLoading,
        handleLoadingState,
        handleSaveData,
        changeStateModal,
        cityModal,
        handleCityModal,
      }}
    >
      {children}
    </principalContext.Provider>
  );
};

export default PrincipalProvider;
