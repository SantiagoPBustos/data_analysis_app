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
  "#95baf3",
  "#92b8f1",
  "#90b5ee",
  "#8db3ec",
  "#8bb0ea",
  "#89ade8",
  "#86abe6",
  "#84a8e3",
  "#82a5e1",
  "#7fa3df",
  "#7da0dd",
  "#7a9edb",
  "#789bd8",
  "#7698d6",
  "#7396d4",
  "#7193d2",
  "#6f91d0",
  "#6c8ecd",
  "#6a8bcb",
  "#6789c9",
  "#6586c7",
  "#6383c4",
  "#6081c2",
  "#5e7ec0",
  "#5b7cbe",
  "#5979bc",
  "#5776b9",
  "#5474b7",
  "#5271b5",
  "#506eb3",
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
