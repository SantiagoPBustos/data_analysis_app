import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";

function GraphicPie({ titleGraphic, descriptionGraphic, dataGraphic }) {
  useEffect(() => {
    accessibility(Highcharts);
    exporting(Highcharts);
  }, []);

  const options = {
    colors: ["#3664aa", "#97bdf5"],
    chart: { type: "pie" },
    title: {
      text: `${titleGraphic}`,
      align: "center",
    },
    subtitle: {
      text: `${descriptionGraphic}`,
      align: "center",
    },
    accessibility: {
      announceNewData: { enabled: true },
      point: { valueSuffix: "%" },
    },
    plotOptions: {
      series: {
        borderRadius: 0,
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.y:.1f}%",
        },
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
    series: [
      {
        name: "Categoria",
        colorByPoint: true,
        data: dataGraphic,
      },
    ],
  };
  return (
    <div className="graphicResponsive">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
export default GraphicPie;
