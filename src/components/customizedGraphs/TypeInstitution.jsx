import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../graphics/GraphicBarHorizontal";
import { colorGraphicGreenReverse } from "../../utils/Utilities";

const TypeInstitution = () => {
  const titleTypeInstitution = "Tipo de Institucion";
  const descriptionTypeInstitution =
    "Promedio de Porcentaje de Cumplimiento Agrupado por Tipo de Institucion";
  const { datasTypeInstitutions } = useContext(principalContext);
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          titleGraphic={titleTypeInstitution}
          descriptionGraphic={descriptionTypeInstitution}
          datasGraphic={datasTypeInstitutions}
          colorGraphic={colorGraphicGreenReverse}
          isModal={true}
          height={200}
        />
      </div>
    </>
  );
};

export default TypeInstitution;
