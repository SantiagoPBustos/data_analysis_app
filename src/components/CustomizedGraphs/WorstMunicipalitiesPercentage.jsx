import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import { principalContext } from "../../context/principalContext";
import { colorGraphicBlue } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const WorstMunicipalitiesPercentage = () => {
  const titleWorstMunicipalities = "Porcentaje de Cumplimiento por Municipio";
  const descriptionWorstMunicipalities =
    "Promedio de Porcentaje de Cumplimiento Agrupado por Municipio";
  const descriptionModal =
    "Instituciones con porcentaje de cumplimiento total de Actas de IVC mas bajos";
  const { datasWorstMunicipalities } = useContext(principalContext);

  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarVertical
          titleGraphic={titleWorstMunicipalities}
          descriptionGraphic={descriptionWorstMunicipalities}
          descriptionModalGraphic={descriptionModal}
          datasGraphic={datasWorstMunicipalities}
          colorGraphic={colorGraphicBlue}
          isModal={false}
        />
      </div>
      <ModalGraphic />
    </>
  );
};

export default WorstMunicipalitiesPercentage;
