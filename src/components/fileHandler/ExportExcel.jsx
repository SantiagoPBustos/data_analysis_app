import React from "react";
import * as XLSX from "xlsx";

function ExportExcel() {
  const downloadExcel = (jsonData, excelFileName) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    XLSX.writeFile(workbook, excelFileName);
  };
  return (
    <div>
      <button onClick={downloadExcel}>Exportar a Excel</button>
    </div>
  );
}

export default ExportExcel;
