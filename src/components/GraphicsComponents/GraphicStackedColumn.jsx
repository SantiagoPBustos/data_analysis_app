import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exporting from "highcharts/modules/exporting";
import accessibility from "highcharts/modules/accessibility";

function GraphicStackedColumn({
  titleGraphic,
  descriptionGraphic,
  categoriesGraphic,
  labelY,
  dataGraphic,
}) {
  useEffect(() => {
    accessibility(Highcharts);
    exporting(Highcharts);
  }, []);

  const options = {
    colors: ["#97bdf5", "#3664aa"],
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
      categories: categoriesGraphic,
    },
    yAxis: {
      min: 0,
      title: {
        text: `${labelY}`,
      },
    },
    legend: {
      align: "left",
      x: 70,
      verticalAlign: "top",
      y: 60,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}%",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: dataGraphic,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default GraphicStackedColumn;
