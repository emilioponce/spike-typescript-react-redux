import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { ExtraData } from "../reducers/types";

import { getExtraData } from "../selectors";

const ExtraDataComponent = (extraData: Props) => (
  <div className="ExtraData">
    <ul>
      <li>
        <div>Description: {extraData.extraData.description}</div>
      </li>
      <li>
        <div>Language: {extraData.extraData.language}</div>
      </li>
      <li>
        <div>Country: {extraData.extraData.country}</div>
        <div>Region: {extraData.extraData.region}</div>
      </li>
      <li>
        <div>
          Permissions:
          {extraData.extraData.permissions.map(
            (permission: React.ReactNode) => (
              <div>{permission}</div>
            )
          )}
        </div>
      </li>
    </ul>
  </div>
);

const mapStateToProps = (state: ExtraData) => ({
  extraData: getExtraData(state)
});

const connector = connect(mapStateToProps);

export default connector(ExtraDataComponent);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;
