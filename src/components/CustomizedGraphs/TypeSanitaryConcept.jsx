import React, { useContext } from "react";
import GraphicPie from "../GraphicsComponents/GraphicPie";
import { principalContext } from "../../context/principalContext";

const TypeSanitaryConcept = () => {
  const titleTypeConceptSanitary = "Tipo de concepto sanitario";
  const descriptionTypeConceptSanitary =
    "Porcentaje de Instituciones Agrupadas por Tipo de concepto sanitario";

  const { dataTypeConceptSanitary } = useContext(principalContext);

  return (
    <GraphicPie
      titleGraphic={titleTypeConceptSanitary}
      descriptionGraphic={descriptionTypeConceptSanitary}
      dataGraphic={dataTypeConceptSanitary}
    />
  );
};

export default TypeSanitaryConcept;
