import React, { useState } from 'react'

 const organizationchildren = {
  //Grandfather
  name: "John",
  age: 90,
  id: 1,
  children: [
    {
      name: "Mary",
      age: 60,
      id: 2,
    },
    {
      name: "Arthur",
      age: 60,
      id: 3,
      children: [
        {
          name: "Lily",
          age: 35,
          id: 4,
          children: [
            {
              name: "Hank",
              age: 60,
              id: 5,
            },
            {
              name: "Henry",
              age: 57,
              id: 6,
            },
          ],
        },
        {
          name: "Billy",
          age: 37,
          id: 7,
        },
      ],
    },
    {
      name: "Dolores",
      age: 55,
      id: 8,
    },
  ],
};

export default organizationchildren