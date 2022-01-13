import { Story } from "@storybook/react";
import React, { useState } from "react";

import { PerPageSelect } from "./PerPageSelect";

export default {
  component: PerPageSelect,
  title: "PerPageSelect",
};

export const Controlled: Story = () => {
  const [perPage, setPerPage] = useState(20);
  return (
    <PerPageSelect
      perPage={perPage}
      setPerPage={setPerPage}
      values={[10, 20, 50, 100]}
    />
  );
};
