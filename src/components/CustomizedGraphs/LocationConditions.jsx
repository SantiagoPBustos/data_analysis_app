import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";

const LocationConditions = () => {
  const titleLocationConditions = "Condiciones Locativas por Municipio";
  const descriptionLocationConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones Locativas Agrupado por Municipio";

  const { datasLocationConditions } = useContext(principalContext);
  return (
    <div className="graphicResponsive">
      <GraphicBarHorizontal
        datasGraphic={datasLocationConditions}
        descriptionGraphic={descriptionLocationConditions}
        titleGraphic={titleLocationConditions}
        colorGraphic={colorGraphicBlue}
      ></GraphicBarHorizontal>
    </div>
  );
};

export default LocationConditions;
