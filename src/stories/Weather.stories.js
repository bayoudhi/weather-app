import React from "react";

import Weather from "../components/Weather";

export default {
  title: "Example/Weather",
  component: Weather,
};

const weather1 = {
  name: "Paris",
  sys: {
    country: "FR",
  },
  main: {
    temp: 16,
  },
  weather: [
    {
      main: "Cloud",
    },
  ],
};

const Template = (args) => <Weather {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  weather: weather1,
  date:'01/12/2020'
};
