import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import { principalContext } from "../../context/principalContext";
import { colorGraphicBlue } from "../../utils/Utilities";

const WorstMunicipalitiesPercentage = () => {
  const titleWorstMunicipalities = "Porcentaje de Cumplimiento por Municipio";
  const descriptionWorstMunicipalities =
    "Promedio de Porcentaje de Cumplimiento Agrupado por Municipio";

  const { datasWorstMunicipalities } = useContext(principalContext);

  return (
    <GraphicBarVertical
      titleGraphic={titleWorstMunicipalities}
      descriptionGraphic={descriptionWorstMunicipalities}
      dataGraphic={datasWorstMunicipalities}
      colorGraphic={colorGraphicBlue}
    />
  );
};

export default WorstMunicipalitiesPercentage;
