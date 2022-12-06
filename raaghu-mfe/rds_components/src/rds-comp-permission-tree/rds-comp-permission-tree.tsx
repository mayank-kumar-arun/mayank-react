
import React, {useState} from "react";
import "./rds-comp-permission-tree.scss"
// Arbitrarily nested data
export interface RdsPT { 
	toppingOptions :any[]
}
  
  // Root component -> Manages all app state
  const RdsCompPermissionTree = (props:RdsPT ) => {    
	const[selectedOption, setSelectedOption ]=useState({})
	
	const OptionsList = ({ options, selectedOptions, onChange }:any) => {
     console.log("options ",options )
		const handleCheckboxClicked = (selectedOptionId:any) => {
		  // is currently selected
		  setSelectedOption(selectedOptionId)
		  // call onChange function given by parent
		  onChange(selectedOptions) 
		}
		
		const handleSubOptionsListChange = (optionId:any, subSelections:any) => {
		  // add sub selections to current optionId
		  setSelectedOption(subSelections[optionId])
		  onChange(subSelections);
		}
		
		return (
		  <div>
			{options.map((option:any) => (
			  <ul>
				<Checkbox 
				  selected={selectedOptions[option.id]} 
				  label={option.name} 
				  onChange={() => {handleCheckboxClicked(option.id)}}
				 />
				{/* Base Case */}
				{(option.subOptions.length > 0 && selectedOptions[option.id]) &&
				  <OptionsList
					options={option.subOptions}
					selectedOptions={selectedOptions[option.id]} 
					onChange={(subSelections:any) => handleSubOptionsListChange(option.id, subSelections)}
				   />
				}
			  </ul>
			))}
		  </div>
		)
	  }
	  
	  // Dumb checkbox component, completly controlled by parent
	  const Checkbox = ({ selected, label, onChange }:any) => {
		return (
		  <div>
			<div
			  className="checkbox" 
			  onClick={() => onChange(!selected)} 
			/> 
			<div className="label">{label}</div>
		  </div>
		)
	  }
	return (
		 <div>
		   <h1>Toppings</h1>
		   <OptionsList 
			 options={props.toppingOptions} 
			 onChange={(selectedOptions:any) =>setSelectedOption(selectedOptions)}
			 selectedOptions={selectedOption} 
		   />
		 </div>
	   )
	
  }
  export default RdsCompPermissionTree;
  
  // Recursive component
 
  
  
  
  


// import React from "react";
// import { Fragment, ReactNode } from "react";
// import { RdsSearch, RdsCheckbox, RdsIcon, RdsCounter } from "../rds-elements";
// import { PermissionNode, TreeType } from "./pemission.model";

// export interface RdsCompPermissionTreeProps {
//   selectAllLabel?: string;
//   selectedItems?: PermissionNode[];
//   treeData: PermissionNode[];
//   permissions?: any;
//   TreeType?: TreeType[];
//   mutable?: boolean;
//   multiselectTree?: boolean;
//   getAllselectedPermissions: React.EventHandler<any>;
// }

// const RdsCompPermissionTree = (props: RdsCompPermissionTreeProps) => {
//   const setStateBasedOnMutable = (lastNode: boolean, node: PermissionNode) => {
//     if (!props.mutable && lastNode && node.children.length === 0) {
//       return false;
//     }
//     return true;
//   };

//   let setCheckedValueForNodeAndChildren = (item:any, value:any) => {
//     if (item.children) {
//       return {
//         ...item,
//         checked: value,
//         children: item.children.map((x:any) =>
//           setCheckedValueForNodeAndChildren(x, value)
//         ),
//       };
//     } else {
//       return { ...item, checked: value };
//     }
//   };

//   let toggleNodeInsideTree = (id:any, tree:any) => {
//     return tree.map((x:any) => {
//       if (x.id === id) {
//         return setCheckedValueForNodeAndChildren(x, !x.checked);
//       }

//       if (x.children) {
//         return { ...x, children: toggleNodeInsideTree(id, x.children) };
//       }

//       return x;
//     });
//   };
//   return <></>;
// };

// export default RdsCompPermissionTree;
