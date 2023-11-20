import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";
import Modal from "../GraphicsComponents/Modal";

exporting(Highcharts);
accessibility(Highcharts);

function GraphicBarHorizontal({
  titleGraphic,
  descriptionGraphic,
  datasGraphic,
  colorGraphic = [],
}) {
  const [stateModalGraphic, setStateModalGraphic] = useState(true);
  useEffect(() => {
    accessibility(Highcharts);
    exporting(Highcharts);
  }, []);

  const options = {
    colors: colorGraphic,
    chart: {
      type: "column",
    },
    title: {
      text: `${titleGraphic}`,
      align: "center",
    },
    subtitle: {
      text: `${descriptionGraphic}`,
    },
    xAxis: {
      type: "category",
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      title: null,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "<b>{point.y:.1f}%</b>",
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              console.log(`Clic en ${this.name}`);
              console.log(`Nombre: ${titleGraphic}`);

              // Debes generar el gráfico category aquí
              // Puedes utilizar el estado de tu componente o una función para renderizarlo.
            },
          },
        },
      },
    },
    series: [
      {
        colorByPoint: true,
        data: datasGraphic,
        cursor: "pointer",
      },
    ],
  };

  return (
    <>
      <div className="graphicResponsive">
        <HighchartsReact
          style="highcharts-contextmenu"
          options={options}
          highcharts={Highcharts}
        />
      </div>
      <Modal state={stateModalGraphic} changeState={setStateModalGraphic}>
        <h3>Archivo Cargado Invalido</h3>
        <br />
        <p>
          El archivo cargado no corresponde a un documento de Excel
          <br />
          Intente nuevamente cargando el formato indicado.
        </p>
        <br />
        <button
          className="btn-modal"
          onClick={() => {
            setStateModal(false);
            handleLoadingState(false);
          }}
        >
          Aceptar
        </button>
      </Modal>
    </>
  );
}

export default GraphicBarHorizontal;
