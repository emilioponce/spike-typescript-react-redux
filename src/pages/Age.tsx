import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { Age } from "../reducers/types";

import { getAge } from "../selectors";

const AgeComponent = ({ age }: Props) => <div className="Age">Age: {age}</div>;

const mapStateToProps = (state: Age) => ({ age: getAge(state) });

const connector = connect(mapStateToProps);

export default connector(AgeComponent);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;
