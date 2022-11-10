import React, { useState } from "react";
import { RdsIcon } from "../../../../raaghu-elements/src";


const RdsCompOrganizationTree = () => {

    interface IList {
        name: string;
        image: string;
        id: number;
      }
      
      interface IProps {
        list : IList;
        key: string;
      }

    let lists= [
      
          {
            name: "a",
            image: "red",
            id: 1
          },
          {
            name: "b",
            image: "blue",
            id: 2
          },
          {
            name: "c",
            image: "green",
            id: 3
          }
    ]

    const show:any =lists.map((list)=>{ return <div>{list.name}</div>});
    // const List: React.FC<{ list: IList }> = ({ list }) => {
    //     console.log("from list",list)
    //     return <div>{list.name}</div>;
    //   };
      
      // const renderLists = () => {
      //   return lists.map(list => <p>{list.name}</p> )
      // }
  return (
    <div>

      <div className="position-relative node dottedstyle">
      <div className="vertical-dotted-line"></div>

      </div>
      <div>
      <RdsIcon name={"plus"} stroke={true} colorVariant={"success"} height={"15px"} width={"15px"} class={"mx-2"}></RdsIcon>
      <RdsIcon name={"pencil"} stroke={true} colorVariant={"success"} height={"15px"} width={"15px"} class={"mx-2"}></RdsIcon>
      <RdsIcon name={"delete"} stroke={true} colorVariant={"success"} height={"15px"} width={"15px"} class={"mx-2"}></RdsIcon>{show}</div>
         {/* lists.map() */}
      

    <div>

    </div>
     
  </div>
    )
   
};



export default RdsCompOrganizationTree;