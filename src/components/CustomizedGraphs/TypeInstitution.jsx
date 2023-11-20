import React, { useContext } from "react";
import { principalContext } from "../../context/principalContext";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { colorGraphicGreen } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const TypeInstitution = () => {
  const titleTypeInstitution = "Tipo de Institucion";
  const descriptionTypeInstitution =
    "Promedio de Porcentaje de Cumplimiento Agrupado por Tipo de Institucion";
  const { datasTypeInstitutions } = useContext(principalContext);
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarHorizontal
          titleGraphic={titleTypeInstitution}
          descriptionGraphic={descriptionTypeInstitution}
          datasGraphic={datasTypeInstitutions}
          colorGraphic={colorGraphicGreen}
          isModal={false}
        />
      </div>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasTypeInstitutions}
          colorGraphic={colorGraphicGreen}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default TypeInstitution;
