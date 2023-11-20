import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const LaboratoryConditions = () => {
  const titleLaboratoryConditions = "Condiciones de Laboratorios por Municipio";
  const descriptionLaboratoryConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Laboratorios Agrupado por Municipio";

  const { datasLaboratoryConditions } = useContext(principalContext);
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          titleGraphic={titleLaboratoryConditions}
          descriptionGraphic={descriptionLaboratoryConditions}
          datasGraphic={datasLaboratoryConditions}
          colorGraphic={colorGraphicBlue}
          isModal={false}
        ></GraphicBarHorizontal>
      </div>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasLaboratoryConditions}
          colorGraphic={colorGraphicBlue}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default LaboratoryConditions;
