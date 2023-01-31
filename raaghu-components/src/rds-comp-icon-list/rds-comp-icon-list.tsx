import { id } from "date-fns/locale";
import React, { useState } from "react";
import { Icons } from "../../../raaghu-elements/src/rds-icon/Icons";
import { RdsAlert, RdsIcon, RdsSearch } from "../rds-elements";

export interface RdsCompIconListProps {}

const RdsCompIconList = (props: RdsCompIconListProps) => {
  const IconKeys: string[] = Object.keys(Icons);
  const [renderIconList, setRenderIconList] = useState(IconKeys);
  const [value, setValue] = useState("");

  const copyToClipboard = (text: string) => {
    const template = `<RdsIcon name="${text}" height="20px" width="20px" fill={false} stroke={true} />`;
    navigator.clipboard.writeText(template).then(
      () => {},
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const [identity, setIdentity] = useState<number>();

  const copyHandler = (iconName: string, id: number) => {
    copyToClipboard(iconName);
    setIdentity(id);
    setTimeout(() => {
      setIdentity(-1);
    }, 1500);
  };

  const onIconSearchHandler = (event: any) => {
    const newValue = event.target.value;
    setValue(newValue);
    setRenderIconList(
      newValue.length
        ? IconKeys.filter((item) =>
            item.toLowerCase().includes(newValue.toLowerCase())
          )
        : IconKeys
    );
  };

  return (
    <>
      <div className="row justify-center p-3 bg-light text-center">
        <div className="mt-4">
          <RdsSearch
            placeholder="Search Icon"
            size={""}
            value={value}
            onChange={onIconSearchHandler}
            iconside="left"
          ></RdsSearch>
        </div>
        {renderIconList.map((iconName, id) => (
          <div
            key={`div-${id}`}
            className="col-sm-1 m-3 card d-flex align-items-center justify-center"
            onClick={() => copyHandler(iconName, id)}
          >
            <div className="card-body text-center">
              <div className="pb-2">
                <RdsIcon
                  key={id}
                  name={iconName}
                  height="20px"
                  width="20px"
                  fill={false}
                  stroke={true}
                ></RdsIcon>
              </div>
              <span className="text fs-8 text-wrap">{iconName}</span>
            </div>
            <a className="fs-7 border-top pe-auto pt-1 pb-2">
              {id == identity ? <span className="text-success">Copied</span>: <span>copy </span> }
              {/* Copy{" "} */}
              {id == identity ? "":<RdsIcon
                name="clipboard"
                width="12px"
                height="12px"
                fill={false}
                stroke={true}
              ></RdsIcon>}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default RdsCompIconList;
