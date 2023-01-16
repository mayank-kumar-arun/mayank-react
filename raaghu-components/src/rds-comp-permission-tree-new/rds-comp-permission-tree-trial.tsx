import React, { useState } from "react";

export interface RdsCompPermissionTreeTrialProps {}

const RdsCompPermissionTreeTrial = (props: RdsCompPermissionTreeTrialProps) => {
  const [permission, setPermission] = useState({
    read: false,
    write: false,
    delete: false,
  });

  function handleDeleteChanged(isChecked: boolean) {
    setPermission({
      read: isChecked,
      write: isChecked,
      delete: isChecked,
    });
  }

  function handleNonDeleteChanged(key:string, isChecked: boolean){
    if(!isChecked){
        setPermission({...permission,  [key]:isChecked})
    }
    else {
        setPermission({ ...permission,delete:true, [key]: isChecked })
    }
  }

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={permission.read}
          onChange={(e) =>
            handleNonDeleteChanged('read',e.currentTarget.checked)
          }
        ></input>
        <input
          type="checkbox"
          checked={permission.write}
          onChange={(e) =>
            handleNonDeleteChanged('write',e.currentTarget.checked)
          }
        ></input>
        <input
          type="checkbox"
          checked={permission.delete}
          onChange={(e) => handleDeleteChanged(e.currentTarget.checked)}
        ></input>
      </div>
    </>
  );
};

export default RdsCompPermissionTreeTrial;
