import React from 'react';
import styled from '@emotion/styled';
interface Props {
  width?: string;
  height?: string;
  _onClick?: any;
}

const Grid: React.FC<Props> = ({
  _onClick,
  children,
  ...props
}): React.ReactElement => {
  return (
    <GridStyle onClick={_onClick} {...props}>
      {children}
    </GridStyle>
  )
}

Grid.defaultProps = {
  width: '100%',
  _onClick: () => {},
};

const GridStyle = styled.div<Props>`
  width: ${({ width }) => width};
  width: ${({height}) => height};
`

export default Grid;