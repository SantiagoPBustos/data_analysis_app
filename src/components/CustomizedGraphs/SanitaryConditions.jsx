import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { principalContext } from "../../context/principalContext";
import { colorGraphicGreen } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

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
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasSanitaryConditions}
          colorGraphic={colorGraphicGreen}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default SanitaryConditions;
