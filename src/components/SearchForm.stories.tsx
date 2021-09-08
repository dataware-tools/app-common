import { Story } from "@storybook/react";
import React, { useState } from "react";
import { SearchForm, SearchFormProps } from "./SearchForm";

export default {
  component: SearchForm,
  title: "SearchForm",
};

const Template: Story<SearchFormProps> = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (newValue) => {
    window.alert(newValue);
  },
  onChange: undefined,
  value: undefined,
  defaultValue: "this is test",
};

export const Controlled = (): JSX.Element => {
  const [value, onChange] = useState<string>("controlled");
  return (
    <SearchForm
      onSearch={(newValue) => {
        window.alert(newValue);
      }}
      value={value}
      onChange={onChange}
    />
  );
};
