import { Story } from "@storybook/react";
import React from "react";
import { SearchForm, SearchFormProps } from "./SearchForm";

export default {
  component: SearchForm,
  title: "SearchForm",
};

const Template: Story<SearchFormProps> = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (newValue: string) => {
    window.alert(newValue);
  },
  defaultValue: "this is test",
};
