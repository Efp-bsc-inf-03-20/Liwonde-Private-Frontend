import React from 'react'

function TopNav() {
  const Data = [
    { name: "Opening Hours", description: "Everyday 7AM-9PM" },
    { name: "Call Us On", description: "+2659900000" },
    { name: "Location", description: "Liwonde, Near Filling Station" },
  ];
  return (
    <>
      
        {Data.map((link, index) => (
          <li key={index}>
            {link.name} : {link.description}
          </li>
        ))}
    </>
  );
}
export default TopNav;
