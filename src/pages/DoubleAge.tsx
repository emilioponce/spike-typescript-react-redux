import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { Age } from "../reducers/types";

import { getDoubleAge } from "../selectors";

const DoubleAgeComponent = ({ doubleAge }: Props) => (
  <div className="DoubleAge">Double age: {doubleAge}</div>
);

const mapStateToProps = (state: Age) => ({ doubleAge: getDoubleAge(state) });

const connector = connect(mapStateToProps);

export default connector(DoubleAgeComponent);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;
