import React, { useContext, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";
import { principalContext } from "../../context/principalContext";
import { colorGraphicBlue } from "../../utils/Utilities";
import { environment } from "../../venv/venviroment.prod";
import { httpRequest } from "../../services/HttpRequests";

exporting(Highcharts);
accessibility(Highcharts);

function GraphicBarHorizontal({
  titleGraphic,
  descriptionGraphic,
  descriptionModalGraphic,
  datasGraphic = [],
  colorGraphic = colorGraphicBlue,
  isModal,
  height,
}) {
  const {
    changeStateModal,
    handleCityModal,
    handleDataModal,
    handleReportsModal,
    handleDescriptionModal,
    totalData,
    handleLoadingState,
  } = useContext(principalContext);

  useEffect(() => {
    accessibility(Highcharts);
    exporting(Highcharts);
  });

  const options = {
    colors: colorGraphic,
    chart: {
      type: "column",
      scrollablePlotArea: {
        minWidth: height,
        scrollPositionX: 0,
        opacity: 0,
      },
      spacingBottom: 30,
      animation: {
        duration: 500,
      },
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
      min: 0,
      max: 100,
    },
    credits: {
      enabled: false,
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
                      handleDataModal(response.data);
                      handleReportsModal(response.reports);
                      changeStateModal(true);
                    }
                    handleLoadingState(false);
                  })
                  .catch((err) => err);
              }
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
        dataLabels: {
          enabled: true,
          color: "black",
          style: {
            fontSize: "12px",
            textOutline: "0px contrast",
          },
        },
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
