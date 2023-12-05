import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../graphics/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const LocationConditions = () => {
  const titleLocationConditions = "Condiciones Locativas por Municipio";
  const descriptionLocationConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones Locativas Agrupado por Municipio";
  const { datasLocationConditions } = useContext(principalContext);
  const descriptionModal =
    "INSTITUCIONES CON PORCENTAJE DE CUMPLIMIENTO DE CONDICIONES LOCATIVAS MÁS BAJOS";
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          datasGraphic={datasLocationConditions}
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

export default LocationConditions;
