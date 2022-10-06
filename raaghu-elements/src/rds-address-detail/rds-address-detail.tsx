import React, { Fragment } from "react";

export interface RdsAddressDetailProps {
  header?: string;
  addressLine1?: string;
  addressLine2: string;
  addressLine3?: string;
}

const RdsAddressDetail = (props: RdsAddressDetailProps) => {
  return (
    <Fragment>
      <strong>{props.header}</strong>
      <div>{props.addressLine1}</div>
      <div>{props.addressLine2}</div>
      <div>{props.addressLine3}</div>
    </Fragment>
  );
};

export default RdsAddressDetail;
