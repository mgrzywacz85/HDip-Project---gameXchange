import React from "react";
import { Message, Grid } from "semantic-ui-react";

const AlertItem = ({ message }) => (
  <Grid centered>
    <Message content={message} />
  </Grid>
);

export default AlertItem;
