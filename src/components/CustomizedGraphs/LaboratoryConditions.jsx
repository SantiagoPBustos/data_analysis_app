import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const LaboratoryConditions = () => {
  const titleLaboratoryConditions = "Condiciones de Laboratorios por Municipio";
  const descriptionLaboratoryConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Laboratorios Agrupado por Municipio";
  const descriptionModal =
    "Instituciones con porcentaje de cumplimiento de condiciones de laboratorios mas bajos";
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
        ></GraphicBarHorizontal>
      </div>
      <ModalGraphic />
    </>
  );
};

export default LaboratoryConditions;
