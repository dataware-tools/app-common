import React from 'react'

type Props = {
  size: number | string
  direction?: 'vertical' | 'horizontal'
} & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

const Component = ({
  size,
  direction,
  style = {},
  ...delegated
}: Props): JSX.Element => {
  const width = direction === 'vertical' ? 1 : size
  const height = direction === 'horizontal' ? 1 : size
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style
      }}
      {...delegated}
    />
  )
}

export { Component as Spacer }
export type { Props as SpacerProps }
