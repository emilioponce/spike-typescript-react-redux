import React from "react";
import { connect } from "react-redux";

import { pageSetData, pageDataClear } from "../../actions";

const Filters = ({ pageSetData, pageDataClear }) => {
  const handleSetValue = () => pageSetData({ value: 25 });
  const handleClear = () => pageDataClear();

  return (
    <div style={{ padding: 100 }}>
      Set your age to 25:
      <button onClick={handleSetValue}>Set</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
export default connect(null, { pageSetData, pageDataClear })(Filters);
