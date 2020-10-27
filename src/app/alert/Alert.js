import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AlertItem from './AlertItem';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertItem key={alert.id} message={alert.msg} />
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
  });

export default connect(mapStateToProps)(Alert);