import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicBlue } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const LocationConditions = () => {
  const titleLocationConditions = "Condiciones Locativas por Municipio";
  const descriptionLocationConditions =
    "Promedio de Porcentaje de Cumplimiento de Condiciones Locativas Agrupado por Municipio";

  const { datasLocationConditions } = useContext(principalContext);
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          datasGraphic={datasLocationConditions}
          descriptionGraphic={descriptionLocationConditions}
          titleGraphic={titleLocationConditions}
          colorGraphic={colorGraphicBlue}
          isModal={false}
        ></GraphicBarHorizontal>
      </div>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasLocationConditions}
          colorGraphic={colorGraphicBlue}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default LocationConditions;
