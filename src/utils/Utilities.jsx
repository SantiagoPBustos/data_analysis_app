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
  "#F8F8CB",
  "#F4F4C4",
  "#E8EEBB",
  "#DCE8B2",
  "#D0E2A9",
  "#C4DCA0",
  "#B8D697",
  "#ACD08E",
  "#A0CA85",
  "#94C47C",
  "#88BD73",
  "#7CB76A",
];
