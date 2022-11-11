import React, { useState } from 'react'

 const organizationChild = {
  //Grandfather
  name: "John",
  age: 90,
  child: [
    {
      name: "Mary",
      age: 60,
    },
    {
      name: "Arthur",
      age: 60,
      child: [
        {
          name: "Lily",
          age: 35,
          child: [
            {
              name: "Hank",
              age: 60,
            },
            {
              name: "Henry",
              age: 57,
            },
          ],
        },
        {
          name: "Billy",
          age: 37,
        },
      ],
    },
    {
      name: "Dolores",
      age: 55,
    },
  ],
};

export default organizationChild