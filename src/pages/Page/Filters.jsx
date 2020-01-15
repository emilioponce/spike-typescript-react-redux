import React, { useCallback } from "react";
import { connect } from "react-redux";

import { pageSetData, pageDataClear } from "../../actions/index";

const Filters = ({ pageSetData, pageDataClear }) => {
  const handleSetValue = useCallback(() => pageSetData(30), [pageSetData]);
  const handleClear = () => pageDataClear();

  return (
    <div style={{ padding: 100 }}>
      Set value to 25:
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};
export default connect(null, { pageSetData, pageDataClear })(Filters);
