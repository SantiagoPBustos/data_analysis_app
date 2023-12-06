import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import * as XLSX from "xlsx";

function ExportExcel() {
  const { dataModal } = useContext(principalContext);



  return (
    <div>
      <button
        onClick={() => {
          downloadExcel();
        }}
      >
        Exportar a Excel
      </button>
    </div>
  );
}

export default ExportExcel;
