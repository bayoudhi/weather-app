import * as React from "react";

import { Header } from "./Header";

const story = {
  title: "Example/Header",
  component: Header,
};
export default story;

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
