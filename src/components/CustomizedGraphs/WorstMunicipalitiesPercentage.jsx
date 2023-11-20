import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import GraphicBarHorizontal from "../GraphicsComponents/GraphicBarHorizontal";
import { principalContext } from "../../context/principalContext";
import { colorGraphicBlue } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const WorstMunicipalitiesPercentage = () => {
  const titleWorstMunicipalities = "Porcentaje de Cumplimiento por Municipio";
  const descriptionWorstMunicipalities =
    "Promedio de Porcentaje de Cumplimiento Agrupado por Municipio";
  const { stateModalGraphic, changeStateModal, cityModal } =
    useContext(principalContext);
  const { datasWorstMunicipalities } = useContext(principalContext);

  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarVertical
          titleGraphic={titleWorstMunicipalities}
          descriptionGraphic={descriptionWorstMunicipalities}
          dataGraphic={datasWorstMunicipalities}
          colorGraphic={colorGraphicBlue}
          isModal={false}
        />
      </div>
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <GraphicBarHorizontal
          titleGraphic={cityModal}
          dataGraphic={datasWorstMunicipalities}
          isModal={true}
        />
      </Modal>
    </>
  );
};

export default WorstMunicipalitiesPercentage;
