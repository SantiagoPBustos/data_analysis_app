import React, { useContext, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";
import { principalContext } from "../../context/principalContext";

function GraphicBarVertical({
  titleGraphic,
  dataGraphic,
  descriptionGraphic,
  colorGraphic = [],
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
      animation: {
        duration: 500,
      },
      marginRight: 60,
    },
    title: {
      text: `${titleGraphic}`,
      align: "center",
    },
    subtitle: {
      text: `${descriptionGraphic}`,
    },
    accessibility: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      opposite: false,
      tickPixelInterval: 50,
      title: {
        text: null,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>',
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              console.log(`Nombre: ${titleGraphic}`);
              handleCityModal(this.name);
              changeStateModal(true);
              // Debes generar el gráfico category aquí
              // Puedes utilizar el estado de tu componente o una función para renderizarlo.
            },
          },
        },
        animation: true,
        groupPadding: 0,
        pointPadding: 0.1,
        borderWidth: 0,
        colorByPoint: true,
        type: "bar",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        type: "bar",
        data: dataGraphic,
        cursor: "pointer",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 550,
          },
          chartOptions: {
            xAxis: {
              visible: false,
            },
            subtitle: {
              x: 0,
            },
            plotOptions: {
              series: {
                dataLabels: [
                  {
                    enabled: true,
                    y: 8,
                  },
                  {
                    enabled: true,
                    format: "{point.name%}",
                    y: -8,
                    style: {
                      fontWeight: "normal",
                      opacity: 0.7,
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="graphicResponsive">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default GraphicBarVertical;
