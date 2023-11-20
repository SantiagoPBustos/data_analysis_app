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
    "Peores Promedios de Porcentaje de Cumplimiento Total de Acta IVC";
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  const { datasWorstMunicipalities } = useContext(principalContext);

  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarVertical
          titleGraphic={titleWorstMunicipalities}
          descriptionGraphic={descriptionWorstMunicipalities}
          dataGraphic={datasWorstMunicipalities}
          colorGraphic={colorGraphicBlue}
          isModal={false}
        />
      </div>
      <ModalGraphic />
    </>
  );
};

export default WorstMunicipalitiesPercentage;
