import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message, Grid, Segment } from "semantic-ui-react";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Grid width={10} centered>
      <Segment>
        <Message key={alert.id} warning content={alert.msg} />
      </Segment>
    </Grid>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
