import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import { pageSetAge, pageSetDoubleAge, pageClear } from "../actions";

// Adding an extra prop will result into a TS error as it's not declared
const Filters = ({ pageSetAge, pageSetDoubleAge, pageClear, other }: Props) => {
  const [age, setAge] = useState(0);

  const handleSetValue = () => {
    pageSetAge({ value: age });
    pageSetDoubleAge({ value: age });
  };

  const handleChange = (event: any) => setAge(event.target.value);

  const handleClear = pageClear;

  return (
    <div style={{ padding: 100 }}>
      <input type="number" onChange={handleChange} />
      <button onClick={handleSetValue}>Set age</button>
      <button onClick={handleClear}>Clear</button>
      <div>
        inherited prop example: <b>{other}</b>
      </div>
    </div>
  );
};

const connector = connect(null, { pageSetAge, pageClear, pageSetDoubleAge });

export default connector(Filters);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  other: string;
};
