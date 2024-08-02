export const buttons = [
  {
    content: "°C",
  },
  {
    content: "°F",
  },
];

export const temperatureOptions = {
  "°C": "metric",
  "°F": "imperial",
};

export const getFormattedDate = (date) => {
  const outputDate = new Date(date);
  const formattedDate = `${outputDate.toLocaleDateString("default", {
    weekday: "short",
  })}, ${outputDate.getDate()} ${outputDate.toLocaleDateString("default", {
    month: "short",
  })}`;
  return formattedDate;
};

export const degToCompass = (num) => {
  const val = Math.floor(num / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};
