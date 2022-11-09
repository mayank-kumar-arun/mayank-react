import React, { useState } from "react";


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

    let lists : IList []= [
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

    // const List: React.FC<{ list: IList }> = ({ list }) => {
    //     console.log("from list",list)
    //     return <div>{list.name}</div>;
    //   };
      
      // const renderLists = () => {
      //   return lists.map(list => <p>{list.name}</p> )
      // }
    const [showList, setShowList] = useState<boolean>(false)
  return (
    <div>
   
      <button onClick={()=>setShowList(!showList)}>click me</button> 
    {showList && lists.map((list:IList) => <p>{list.name}</p>)}
     
      {/* <List key={list.id} list={list} /> */}
  </div>
    )
   
};



export default RdsCompOrganizationTree;