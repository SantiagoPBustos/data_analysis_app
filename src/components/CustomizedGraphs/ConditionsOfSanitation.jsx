import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import { principalContext } from "../../context/principalContext";
import { colorGraphicGreen } from "../../utils/Utilities";
import ModalGraphic from "./ModalGraphic";

const ConditionsOfSanitation = () => {
  const titleConditionsOfSanitation =
    "Condiciones de Saneamiento por Municipio";
  const descriptionConditionsOfSanitation =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Saneamiento Agrupado por Municipio";
  const { datasConditionsOfSanitation } = useContext(principalContext);
  const descriptionModal =
    "Instituciones con porcentaje de cumplimiento de condiciones de saneamiento mas bajos";
  return (
    <>
      <div className="graphicResponsive">
        <GraphicBarVertical
          titleGraphic={titleConditionsOfSanitation}
          descriptionGraphic={descriptionConditionsOfSanitation}
          descriptionModalGraphic={descriptionModal}
          datasGraphic={datasConditionsOfSanitation}
          colorGraphic={colorGraphicGreen}
          isModal={false}
        />
      </div>
      <ModalGraphic />
    </>
  );
};

export default ConditionsOfSanitation;
