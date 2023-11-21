import React, { useContext, useState } from "react";
import excelLab from "../../files/Formato_Cargue_Instituciones_Educativas_con_Laboratorio.xlsx";
import excel from "../../files/Formato_Cargue_Instituciones_sin_Laboratorio.xlsx";
import { arrayToJsonData, isFileValid } from "../../utils/Utilities";
import { httpRequest } from "../../services/HttpRequests";
import Modal from "../GraphicsComponents/Modal";
import { principalContext } from "../../context/principalContext";
import { Oval } from "react-loader-spinner";
import { environment } from "../../venv/venviroment.prod";
import * as XLSX from "xlsx";

function MyReaderExcel() {
  const [stateModal, setStateModal] = useState(false);

  const {
    loadWorstMunicipalities,
    loadConditionsSanitation,
    loadLaboratoryConditions,
    loadLocationConditions,
    loadSanitaryConditions,
    loadTypesInstitutions,
    loadTypeConceptSanitary,
    loadRiskManagement,
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
  } = useContext(principalContext);

  const handleReadFile = (e) => {
    e.preventDefault();
    handleLoadingState(true);
    const inputFile = document.getElementById("excel-file");
    const file = inputFile.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      if (isFileValid(file) === "xlsx") {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const headers = excelData[0];
        const values = excelData.slice(1);
        postData(arrayToJsonData(headers, values));
      } else {
        setStateModal(true);
      }
    };
    fileReader.readAsBinaryString(file);
  };

  const postData = (dataToSend) => {
    handleSaveData(dataToSend);
    console.log(JSON.stringify(dataToSend));
    const endpoint = `${environment.endpointProduction}postData/`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    };
    httpRequest(endpoint, options)
      .then((response) => {
        if (response.status === 200) {
          handleChangeInstitutions(response.total);
          handleEducationInstitutions(response.total_IE);
          handleSuperiorEducation(response.total_IEES);
          handleTotalChilhood(response.total_HI);
          handleTotalCenterChildren(response.total_CDI);
          handleTotalCenterRural(response.total_CER);
          loadWorstMunicipalities(response.worst_municipalities);
          loadConditionsSanitation(response.conditions_sanitation);
          loadLaboratoryConditions(response.conditions_laboratories);
          loadLocationConditions(response.location_conditions);
          loadRiskManagement(response.risk_management);
          loadSanitaryConditions(response.sanitary_conditions);
          loadTypesInstitutions(response.type_institutions);
          loadTypeConceptSanitary(response.type_concept);
          handleDataLoading(true);
        }
        handleLoadingState(false);
      })
      .catch((err) => err);
  };

  return (
    <>
      <div className="container-file-reader">
        <h2>Reporte de Actas IVC de Instituciones Educativas</h2>
        <form className="form-file-reader" onSubmit={handleReadFile}>
          <div className="mb-3">
            <label>
              Realice cargue de archivo de excel segun los formatos adjuntos
            </label>
            <br />
            <a
              href={excelLab}
              target="_blank"
              rel="noopener noreferrer"
              download="Formato_Cargue_Instituciones_Educativas_con_Laboratorio.xlsx"
            >
              Formato de Actas IVC de Instituciones Educativas
            </a>
            <br />
            <a
              href={excel}
              target="_blank"
              rel="noopener noreferrer"
              download="Formato_Cargue_Instituciones_sin_Laboratorio.xlsx"
            >
              Formato de Actas IVC de Instituciones sin Laboratorio
            </a>
            <br />
            <br />
            <div className="file-reader">
              <input
                required
                className="form-control"
                type="file"
                id="excel-file"
                name="excel-file"
                accept=".xlsx"
              />
              <button className="btn-load-data">Cargar Datos</button>
            </div>
          </div>
        </form>
        <Oval
          height={60}
          width={60}
          color="black"
          wrapperStyle={{}}
          wrapperClass="loading-spinner"
          visible={loadingState}
          ariaLabel="oval-loading"
          secondaryColor="black"
          strokeWidth={4}
          strokeWidthSecondary={4}
        />
        <Modal state={stateModal} changeState={setStateModal}>
          <h3>Archivo Cargado Invalido</h3>
          <br />
          <p>
            El archivo cargado no corresponde a un documento de Excel
            <br />
            Intente nuevamente cargando el formato indicado.
          </p>
          <br />
          <button
            className="btn-modal"
            onClick={() => {
              setStateModal(false);
              handleLoadingState(false);
            }}
          >
            Aceptar
          </button>
        </Modal>
      </div>
    </>
  );
}
export default MyReaderExcel;
