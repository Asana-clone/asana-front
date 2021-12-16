import React from 'react'
import Text from '../atoms/Text';
import Grid from '../atoms/Grid';

const OverViewPR: React.FC = () => {
  return (
    <Grid
      kind="FC"
    >
      <p>
        <Text
          size={"20px"}
          color={"#1e1f21"}
          weight={"600"}>
          Project roles
        </Text>
      </p>
      <Grid
        position='start'
      >
        <div>영역1</div>
        <div>영역2</div>
      </Grid>
    </Grid>
  )
}





export default OverViewPR
