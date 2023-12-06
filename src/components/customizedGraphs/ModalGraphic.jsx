import React, { useContext } from "react";
import GraphicBarHorizontal from "../graphics/GraphicBarHorizontal";
import { principalContext } from "../../context/principalContext";
import Modal from "../graphics/Modal";
import * as XLSX from "xlsx";

const ModalGraphic = () => {
  const {
    stateModalGraphic,
    changeStateModal,
    cityModal,
    reportsModal,
    dataModal,
    descriptionModal,
  } = useContext(principalContext);

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dataModal);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, `Instituciones_Educativas_${cityModal}_2023.xlsx`);
  };

  return (
    <>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          descriptionGraphic={descriptionModal}
          datasGraphic={reportsModal}
          isModal={true}
          height={1000}
        />
        <button
          className="btn-export-data"
          onClick={() => {
            exportExcel();
          }}
        >
          Exportar Excel
        </button>
      </Modal>
    </>
  );
};

export default ModalGraphic;
