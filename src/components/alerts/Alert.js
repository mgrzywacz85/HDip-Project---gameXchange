/* import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";








const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    // <Message key={alert.id} warning>
    //   <Message.Header>Note:</Message.Header>
    //   <p>{alert.msg}</p>
    // </Message>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// map the redux state to a prop in the Alert component

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
 */