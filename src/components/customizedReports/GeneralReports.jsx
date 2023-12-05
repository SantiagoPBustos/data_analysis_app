import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";

const GeneralReports = () => {
  const {
    totalInstitutions,
    educationInstitutions,
    superiorEducationInstitutions,
    totalChilhood,
    totalCenterChildren,
    totalCenterRural,
  } = useContext(principalContext);

  return (
    <div className="card-section">
      <div className="card">
        CANTIDAD TOTAL DE INSTITUCIONES CARGADAS <b>{totalInstitutions}</b>
      </div>
      <div className="card">
        CANTIDAD TOTAL INSTITUCIONES EDUCATIVAS <b>{educationInstitutions}</b>
      </div>
      <div className="card">
        CANTIDAD TOTAL HOGARES INFANTILES <b>{totalChilhood}</b>
      </div>
      <div className="card">
        CANTIDAD TOTAL DE CENTROS DE DESARROLLO INFANTIL
        <b>{totalCenterChildren}</b>
      </div>
      <div className="card">
        CANTIDAD TOTAL DE CENTROS EDUCATIVOS RURALES <b>{totalCenterRural}</b>
      </div>
      <div className="card">
        CANTIDAD TOTAL INSTITUCIONES EDUCATIVAS DE EDUCACION SUPERIOR
        <b>{superiorEducationInstitutions}</b>
      </div>
    </div>
  );
};

export default GeneralReports;
