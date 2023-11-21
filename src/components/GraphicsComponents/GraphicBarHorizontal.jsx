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
  });

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
