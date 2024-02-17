export const paramToString = (param: string | string[] | undefined) => {
  if (Object.prototype.toString.call(param) === "[object Array]") {
    const keywordString = param as string;
    return keywordString.length ? decodeURI(keywordString[0]) : "";
  } else return param === undefined ? null : decodeURI(param as string);
};

export const paramToInt = (param: string | string[] | undefined) => {
  const num = parseInt(paramToString(param) ?? "");
  return isNaN(num) ? null : num;
};

export const minmax = (x: number, min: number, max: number) =>
  x < min ? min : x > max ? max : x;
