import React, { useState } from 'react'
import { Story } from '@storybook/react'

import { PerPageSelect } from './PerPageSelect'

export default {
  component: PerPageSelect,
  title: 'PerPageSelect'
}

export const Default: Story = () => {
  const [perPage, setPerPage] = useState(20)
  return (
    <PerPageSelect
      perPage={perPage}
      setPerPage={setPerPage}
      values={[10, 20, 50, 100]}
    />
  )
}
