import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import { principalContext } from "../../context/principalContext";
import { colorGraphicGreen } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const SanitaryConditions = () => {
  const titleSanitaryConditions = "Condiciones Sanitarias por Municipio";
  const descriptionSanitaryConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones Sanitarias Agrupado por Municipio";
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  const { datasSanitaryConditions } = useContext(principalContext);

  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarVertical
          titleGraphic={titleSanitaryConditions}
          descriptionGraphic={descriptionSanitaryConditions}
          dataGraphic={datasSanitaryConditions}
          colorGraphic={colorGraphicGreen}
          isModal={false}
        />
      </div>
      <ModalGraphic />
    </>
  );
};

export default SanitaryConditions;
