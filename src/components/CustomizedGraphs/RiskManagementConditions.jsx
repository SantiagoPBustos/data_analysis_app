import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const RiskManagementConditions = () => {
  const titleLocationConditions =
    "Condiciones de Gestion del Riesgo por Municipio";
  const descriptionLocationConditions =
    "Promedio de Porcentaje de Cumplimiento de de Gestion del Riesgo Agrupado por Municipio";
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  const { datasRiskManagementConditions } = useContext(principalContext);
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          datasGraphic={datasRiskManagementConditions}
          descriptionGraphic={descriptionLocationConditions}
          titleGraphic={titleLocationConditions}
          colorGraphic={colorGraphicBlue}
          isModal={false}
        ></GraphicBarHorizontal>
      </div>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasRiskManagementConditions}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default RiskManagementConditions;
