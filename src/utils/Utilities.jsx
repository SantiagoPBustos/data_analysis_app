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

function generarRangoHexadecimal(inicial, final, cantidad) {
  const inicioR = parseInt(inicial.slice(1, 3), 16);
  const inicioG = parseInt(inicial.slice(3, 5), 16);
  const inicioB = parseInt(inicial.slice(5), 16);

  const finR = parseInt(final.slice(1, 3), 16);
  const finG = parseInt(final.slice(3, 5), 16);
  const finB = parseInt(final.slice(5), 16);

  const pasoR = (finR - inicioR) / (cantidad - 1);
  const pasoG = (finG - inicioG) / (cantidad - 1);
  const pasoB = (finB - inicioB) / (cantidad - 1);

  const resultados = [];
  for (let i = 0; i < cantidad; i++) {
    const nuevoR = Math.round(inicioR + i * pasoR);
    const nuevoG = Math.round(inicioG + i * pasoG);
    const nuevoB = Math.round(inicioB + i * pasoB);

    const colorHex = `#${nuevoR.toString(16).padStart(2, '0')}${nuevoG.toString(16).padStart(2, '0')}${nuevoB.toString(16).padStart(2, '0')}`;
    resultados.push(colorHex);
  }

  return resultados;
}

export const colorGraphicBlue = generarRangoHexadecimal("#97bdf5", "#3664aa", 150);
export const colorGraphicGreen = generarRangoHexadecimal("#c4dda2", "#7cb76a", 150);
export const colorGraphicGreenReverse = generarRangoHexadecimal("#7cb76a", "#c4dda2", 150);