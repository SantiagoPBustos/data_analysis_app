import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { principalContext } from "../../context/principalContext";
import { colorGraphicGreen } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const ConditionsOfSanitation = () => {
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);

  const titleConditionsOfSanitation =
    "Condiciones de Saneamiento por Municipio";
  const descriptionConditionsOfSanitation =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Saneamiento Agrupado por Municipio";

  const { datasConditionsOfSanitation } = useContext(principalContext);

  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarVertical
          titleGraphic={titleConditionsOfSanitation}
          descriptionGraphic={descriptionConditionsOfSanitation}
          dataGraphic={datasConditionsOfSanitation}
          colorGraphic={colorGraphicGreen}
          isModal={false}
        />
      </div>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasConditionsOfSanitation}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default ConditionsOfSanitation;
