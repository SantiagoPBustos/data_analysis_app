import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicGreen } from "../../utils/Utilities";

const TypeInstitution = () => {
  const titleTypeInstitution = "Tipo de Institucion";
  const descriptionTypeInstitution =
    "Promedio de Porcentaje de Cumplimiento Agrupado por Tipo de Institucion";
  const { datasTypeInstitutions } = useContext(principalContext);

  return (
    <GraphicBarHorizontal
      titleGraphic={titleTypeInstitution}
      descriptionGraphic={descriptionTypeInstitution}
      datasGraphic={datasTypeInstitutions}
      colorGraphic={colorGraphicGreen}
    />
  );
};

export default TypeInstitution;
