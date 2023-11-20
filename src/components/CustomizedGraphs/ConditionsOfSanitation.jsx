import React, { useContext } from "react";
import GraphicBarVertical from "../GraphicsComponents/GraphicBarVertical";
import { principalContext } from "../../context/principalContext";
import { colorGraphicGreen } from "../../utils/Utilities";
import Modal from "../GraphicsComponents/Modal";

const ConditionsOfSanitation = () => {
  const { stateModalGraphic, changeStateModal } = useContext(principalContext);

  const titleConditionsOfSanitation =
    "Condiciones de Saneamiento por Municipio";
  const descriptionConditionsOfSanitation =
    "Promedio de Porcentaje de Cumplimiento de Condiciones de Saneamiento Agrupado por Municipio";

  const { datasConditionsOfSanitation } = useContext(principalContext);

  return (
    <>
      <GraphicBarVertical
        titleGraphic={titleConditionsOfSanitation}
        descriptionGraphic={descriptionConditionsOfSanitation}
        dataGraphic={datasConditionsOfSanitation}
        colorGraphic={colorGraphicGreen}
      />
      <Modal state={stateModalGraphic} changeState={changeStateModal}>
        <h3>Grafico de barras</h3>
        <br />
        <p>
          El archivo cargado no corresponde a un documento de Excel
          <br />
          Intente nuevamente cargando el formato indicado.
        </p>
      </Modal>
    </>
  );
};

export default ConditionsOfSanitation;
