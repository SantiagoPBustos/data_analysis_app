import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";

const LaboratoryConditions = () => {
  const titleLaboratoryConditions = "Condiciones de Laboratorios por Municipio";
  const descriptionLaboratoryConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Laboratorios Agrupado por Municipio";

  const { datasLaboratoryConditions } = useContext(principalContext);

  return (
    <div className="graphicResponsive">
      <GraphicBarHorizontal
        titleGraphic={titleLaboratoryConditions}
        descriptionGraphic={descriptionLaboratoryConditions}
        datasGraphic={datasLaboratoryConditions}
        colorGraphic={colorGraphicBlue}
      ></GraphicBarHorizontal>
    </div>
  );
};

export default LaboratoryConditions;
