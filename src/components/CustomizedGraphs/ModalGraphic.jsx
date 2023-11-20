import React, { useContext } from "react";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { principalContext } from "../../context/principalContext";
import Modal from "../GraphicsComponents/Modal";

const ModalGraphic = () => {
  const { stateModalGraphic, changeStateModal, cityModal, descriptionModal, dataModal } =
    useContext(principalContext);

  return (
    <Modal state={stateModalGraphic} changeState={changeStateModal}>
      <GraphicBarHorizontal
        titleGraphic={cityModal}
        descriptionGraphic={descriptionModal}
        dataGraphic={dataModal}
        isModal={true}
      />
    </Modal>
  );
};

export default ModalGraphic;
