export function arrayToJsonData(headers, values) {
  const jsonArray = values.map((value) => {
    const object = {};
    headers.forEach((header, i) => {
      if (value[i] !== undefined) {
        object[header] = value[i];
      }
    });
    return object;
  });

  const filteredJsonArray = jsonArray.filter(
    (item) => Object.keys(item).length > 0
  );

  const json = { data: filteredJsonArray };
  return json;
}

export function isFileValid(file) {
  const fileNames = file.name.split(".");
  return fileNames[fileNames.length - 1].toLowerCase();
}

export const colorGraphicBlue = [
  "#97bdf5",
  "#93b8f2",
  "#8fb3ef",
  "#8bacec",
  "#87a7e9",
  "#83a2e6",
  "#7e9de3",
  "#7a98e0",
  "#7693dd",
  "#728edd",
  "#6e89da",
  "#6a84d7",
  "#668fd4",
  "#618ad1",
  "#5d85ce",
  "#5980cb",
  "#557bca",
  "#5176c7",
  "#4d71c4",
  "#486cc1",
  "#4664aa",
];

export const colorGraphicGreen = [
  "#c4dda2",
  "#c0db9f",
  "#bcd99c",
  "#b9d799",
  "#b5d596",
  "#b1d393",
  "#add190",
  "#a9cf8d",
  "#a6cd8a",
  "#a2cb87",
  "#9ec985",
  "#9ac782",
  "#97c57f",
  "#93c37c",
  "#8fc179",
  "#8bbf76",
  "#87bd73",
  "#84bb70",
  "#80b96d",
  "#7cb76a",
];

export const colorGraphicGreenReverse = [
  "#7CB76A",
  "#88BD73",
  "#94C47C",
  "#A0CA85",
  "#ACD08E",
  "#B8D697",
  "#C4DCA0",
  "#D0E2A9",
  "#DCE8B2",
  "#E8EEBB",
  "#F4F4C4",
  "#F8F8CB",
];
