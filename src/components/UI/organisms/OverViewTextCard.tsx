import React from 'react'
import Text from '../atoms/Text';
import Grid from '../atoms/Grid';

interface OverViewTextCardProps {}

const OverViewTextCard: React.FC<OverViewTextCardProps> = () => {
  return (
    <Grid
      width="100vw"
      kind="FC"
    >
      <Grid>
        <Text
          size={"20px"}
          color={"#1e1f21"}
          weight={"600"}>
          How we'll collaborate
        </Text>
      </Grid>
      <Grid>
        <Text
          color={"#6d6e6f"}
        >Welcome your team and set the tone for how you'll work together in Asana. Add
        meeting details, commuication channles, and other important information</Text>
      </Grid>
    </Grid>
  )
}

export default OverViewTextCard;
