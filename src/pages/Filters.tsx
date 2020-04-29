import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";

import {
  pageClear,
  pageSetAge,
  pageSetDoubleAge,
  pageSetExtraData,
} from "../actions";

const extraDataSample = {
  description: "extra data description",
  language: "ENG",
  country: {
    name: "SPAIN",
    id: 1,
    region: { id: 1, name: "EUROPE" },
  },
  permissions: ["permission1", "permission2"],
};

// Adding an extra prop will result into a TS error as it's not declared
// Typo in the name of anyProp will show a typeCheck error
const Filters = ({
  inheritedPropOfTheParentComponent,
  pageClear,
  pageSetAge,
  pageSetDoubleAge,
  pageSetExtraData,
}: Props) => {
  const [age, setAge] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAge(parseInt(event.target.value, 10));

  // If we put a string in 'value: age' for ex: value: "age", it's gonna fail as it's accepting only numbers
  const handleSetValue = () => {
    pageSetAge({ value: age });
    pageSetDoubleAge({ value: age });
    pageSetExtraData(extraDataSample);
  };

  const handleClear = pageClear;

  return (
    <div style={{ padding: 100 }}>
      <input type="number" onChange={handleChange} />
      <button onClick={handleSetValue}>Set age</button>
      <button onClick={handleClear}>Clear</button>
      <div>
        inherited prop: <b>{inheritedPropOfTheParentComponent}</b>
      </div>
    </div>
  );
};

const connector = connect(null, {
  pageClear,
  pageSetAge,
  pageSetDoubleAge,
  pageSetExtraData,
});

export default connector(Filters);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  inheritedPropOfTheParentComponent: string;
};
