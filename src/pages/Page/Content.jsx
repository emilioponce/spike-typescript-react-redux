import React from "react";
import { connect } from "react-redux";

import { getValue } from "../../selectors";

const Content = ({ value }) => (
  <div className="Content">Content value: {value}</div>
);

const mapStateToProps = state => ({ value: getValue(state) });

export default connect(mapStateToProps)(Content);
