import React, { useContext, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";
import { principalContext } from "../../context/principalContext";
import { environment } from "../../venv/venviroment.prod";
import { httpRequest } from "../../services/HttpRequests";

function GraphicBarVertical({
  titleGraphic,
  datasGraphic,
  descriptionGraphic,
  descriptionModalGraphic,
  colorGraphic = [],
  isModal,
}) {
  const {
    changeStateModal,
    handleCityModal,
    handleDataModal,
    handleDescriptionModal,
    totalData,
    handleLoadingState,
  } = useContext(principalContext);
  useEffect(() => {
    accessibility(Highcharts);
    exporting(Highcharts);
  }, []);
  const options = {
    colors: colorGraphic,
    chart: {
      type: "column",      
      scrollablePlotArea: {
        minWidth: 200,
        scrollPositionY: 1,
      },
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
      min: 0,
      max: 100,
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
              if (!isModal) {
                handleLoadingState(true);
                const endpoint = `${environment.endpointProduction}dataInstitution/`;
                const options = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    data: totalData,
                    municipio: this.name,
                    component: descriptionModalGraphic,
                  }),
                };

                httpRequest(endpoint, options)
                  .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                      handleCityModal(this.name);
                      handleDescriptionModal(descriptionModalGraphic);
                      handleDataModal(response.reports);
                      changeStateModal(true);
                    }
                    handleLoadingState(false);
                  })
                  .catch((err) => err);
              }
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
        data: datasGraphic,
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

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default GraphicBarVertical;
