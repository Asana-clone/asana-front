/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';
/* 테스트용 추후 삭제 */

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
    <GridStyle onClick={_onClick} {...props} css={css`color:blue;`}>
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