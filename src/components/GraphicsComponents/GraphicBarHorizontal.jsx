import React, { useContext, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";
import { principalContext } from "../../context/principalContext";
import { colorGraphicBlue } from "../../utils/Utilities";

exporting(Highcharts);
accessibility(Highcharts);

function GraphicBarHorizontal({
  titleGraphic,
  descriptionGraphic,
  datasGraphic,
  colorGraphic = { colorGraphicBlue },
  isModal,
}) {
  const { changeStateModal, handleCityModal } = useContext(principalContext);

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
              if (!isModal) {
                console.log(`Nombre: ${titleGraphic}`);
                handleCityModal(this.name);
                changeStateModal(true);
              }

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
      <HighchartsReact
        style="highcharts-contextmenu"
        options={options}
        highcharts={Highcharts}
      />
    </>
  );
}

export default GraphicBarHorizontal;
