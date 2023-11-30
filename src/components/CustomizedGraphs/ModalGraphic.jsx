import React, { useContext } from "react";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { principalContext } from "../../context/principalContext";
import Modal from "../GraphicsComponents/Modal";

const ModalGraphic = () => {
  const {
    stateModalGraphic,
    changeStateModal,
    cityModal,
    dataModal,
    descriptionModal,
  } = useContext(principalContext);

  return (
    <Modal state={stateModalGraphic} changeState={changeStateModal}>
      <GraphicBarHorizontal
        titleGraphic={cityModal}
        descriptionGraphic={descriptionModal}
        datasGraphic={dataModal}
        isModal={true}
        height={1000}
      />
    </Modal>
  );
};

export default ModalGraphic;
