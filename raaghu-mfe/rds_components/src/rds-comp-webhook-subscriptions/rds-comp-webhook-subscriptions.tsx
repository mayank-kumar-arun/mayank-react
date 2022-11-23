import React, { useState } from "react";
import { RdsButton, RdsInput, RdsTextArea } from "../rds-elements";
export interface RdsCompWebhookSubscriptionProps {}
const RdsCompWebhookSubscription = (props: RdsCompWebhookSubscriptionProps) => {
  const [endpoint, setEndpoint] = useState("");
  const [event, setEvent] = useState("");
  const [headerKey, setHeaderKey] = useState("");
  const [headerValue, setHeaderValue] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
   const [error4, setError4] = useState("");

   //****************endPoint********************
  const isEndpointValid = (endpoint: any) => {
    if (!endpoint || endpoint.length === 0) {
      return false;
    }

    return true;
  };
 
  const isEventValid = (event: any) => {
    if (!event || event.length === 0) {
      return false;
    }
    return true;
  };
  const isHeaderKeyValid = (headerKey: any) => {
    if (!headerKey || headerKey.length === 0) {
      return false;
    }
    return true;
  };
  const isHeaderValueValid = (headerValue: any) => {
    if (!headerValue || headerValue.length === 0) {
      return false;
    }
    return true;
  };

  //****************endPoint********************
  const endpointhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isEndpointValid(event.target.value)) {
      setError1("Endpoint is invalid");
    } else {
      setError1("");
    }
    setEndpoint(event.target.value);
  };

  const eventhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isEventValid(event.target.value)) {
      setError2("Event is invalid");
    } else {
      setError2("");
    }
    setEvent(event.target.value);
  };
  const headerKeyhandleChange = (event: { target: { value: React.SetStateAction<string> };
  }) => {
    if (!isHeaderKeyValid(event.target.value)) {
      setError3("Header Key is invalid");
    } else {
      setError3("");
    }
    setHeaderKey(event.target.value);
  };
  const headerValuehandleChange = (event: {target: { value: React.SetStateAction<string> };
  }) => {
    if (!isHeaderValueValid(event.target.value)) {
      setError4("Header Value is invalid");
    } else {
      setError4("");
    }
    setHeaderValue(event.target.value);
  };

  

  const isFormValid =
    isHeaderValueValid(headerValue)&&isHeaderKeyValid(headerKey) && isEndpointValid(endpoint) && isEventValid(event);

//****************handle Submit********************
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEvent("");
    setHeaderKey("");
    setHeaderValue("");
    setEndpoint(" ");
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="fw-normal mt-1 mb-3">
            <RdsInput
              label="Webhook Endpoint "
              redAsteriskPresent={true}
              placeholder="Webhook Endpoint "
              inputType="text"
              onChange={endpointhandleChange}
              value={endpoint}
              name={"endpoint"}
            ></RdsInput>
            {error1 && <span style={{ color: "red" }}>{error1}</span>}
          </div>
          <div className="fw-normal mb-4">
            <RdsTextArea
              label="Webhook Event "
              placeholder="Webhook Event "
              onChange={eventhandleChange}
              rows={2}
              value={event}
            />
            {error2 && <span style={{ color: "red" }}>{error2}</span>}
          </div>
          <div className=" fw-normal row" mb-3 mt-2>
          <div className="col-5 mb-3">
            <RdsInput
              placeholder="Header key"
              inputType="text"
              onChange={headerKeyhandleChange}
              name={"headerKey"}
              value={headerKey}
            ></RdsInput>
            {error3 && <span style={{ color: "red" }}>{error3}</span>}
          </div>
          <div className="col-5 mb-3">
            <RdsInput
              placeholder="Header Value"
              inputType="text"
              onChange={headerValuehandleChange}
              name={"headerValue"}
              value={headerValue}
            ></RdsInput>
            {error4 && <span style={{ color: "red" }}>{error4}</span>}
          </div>
          <div className="  col-2">
          <RdsButton
            label="ADD"
            colorVariant="primary"
            block={true}
            tooltipTitle={""}
            type="submit"
          />
          </div>
          </div>
          <div className="row fixed-bottom m-3">
            <div className="col-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              outlineButton={true}
            />
            </div>
            <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
             </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default RdsCompWebhookSubscription;
