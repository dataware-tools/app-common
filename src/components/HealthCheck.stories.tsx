import React from 'react';
import { storiesOf } from '@storybook/react';
import HealthCheck from "./HealthCheck";


storiesOf('HealthCheck/HealthCheck', module)
  .add('default', () =>
    <div>
      <HealthCheck/>
    </div>
  )


