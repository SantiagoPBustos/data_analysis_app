import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../graphics/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const LaboratoryConditions = () => {
  const titleLaboratoryConditions = "Condiciones de Laboratorios por Municipio";
  const descriptionLaboratoryConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Laboratorios Agrupado por Municipio";
  const descriptionModal =
    "INSTITUCIONES CON PORCENTAJE DE CUMPLIMIENTO DE CONDICIONES DE LABORATORIOS MÁS BAJOS";
  const { datasLaboratoryConditions } = useContext(principalContext);
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          titleGraphic={titleLaboratoryConditions}
          descriptionGraphic={descriptionLaboratoryConditions}
          descriptionModalGraphic={descriptionModal}
          datasGraphic={datasLaboratoryConditions}
          colorGraphic={colorGraphicBlue}
          isModal={false}
          height={4000}
        ></GraphicBarHorizontal>
      </div>
      <ModalGraphic />
    </>
  );
};

export default LaboratoryConditions;
