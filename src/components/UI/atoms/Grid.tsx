import React from 'react';

interface Props {
  width?: string;
  height?: string;
}

const Grid: React.FC<Props> = ({
  children
}): React.ReactElement => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Grid;