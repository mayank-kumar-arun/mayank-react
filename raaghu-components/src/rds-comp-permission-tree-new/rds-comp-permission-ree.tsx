import { useCallback, useState } from "react";
// import items from "./items.json";
import CheckboxList from "./rds-comp-permission-tree-child/CheckboxList";
import { updateItemStates } from "./rds-comp-permission-tree-child/updateItemStates";

export enum CheckboxState {
  UNCHECKED,
  CHECKED,
  INDETERMINATE,
}

export interface RdsCompPermissionTreeProps {
  checkboxData: any[]
}

export type ItemState = {
  id: number;
  state: CheckboxState;
};


const RdsCompPermissionTree = (props: RdsCompPermissionTreeProps) => {

  const defaultItemStates: ItemState[] = props.checkboxData.map((i) => ({
    id: i.id,
    state: CheckboxState.UNCHECKED,
  }));

  const [itemStates, setItemStates] = useState<ItemState[]>(defaultItemStates);
  const getStateForId = useCallback(
    (id: number) => {
        const item = itemStates.find((i) => i.id === id);
        return item ? item.state : CheckboxState.UNCHECKED;
    },
    [itemStates]
);
  const clickHandler = useCallback((id:any) => setItemStates(updateItemStates(itemStates, props.checkboxData, id)), [itemStates]);
  return <CheckboxList items={props.checkboxData} onClick={clickHandler} getStateForId={getStateForId} />;
};

export default RdsCompPermissionTree;
