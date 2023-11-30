import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const RiskManagementConditions = () => {
  const titleLocationConditions =
    "Condiciones de Gestion del Riesgo por Municipio";
  const descriptionLocationConditions =
    "Promedio de Porcentaje de Cumplimiento de de Gestion del Riesgo Agrupado por Municipio";
  const { datasRiskManagementConditions } = useContext(principalContext);
  const descriptionModal =
    "INSTITUCIONES CON PORCENTAJE DE CUMPLIMIENTO DE GESTIÓN DE RIESGO MÁS BAJOS";
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          datasGraphic={datasRiskManagementConditions}
          descriptionGraphic={descriptionLocationConditions}
          descriptionModalGraphic={descriptionModal}
          titleGraphic={titleLocationConditions}
          colorGraphic={colorGraphicBlue}
          isModal={false}
          height={4000}
        ></GraphicBarHorizontal>
      </div>
      <ModalGraphic />
    </>
  );
};

export default RiskManagementConditions;
