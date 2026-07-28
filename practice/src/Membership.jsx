import React from "react";

export default function Membership({ name, age ,children}) {
  const list=React.Children.toArray(children);

  return (
    <>

      <div className="card">
        Name is {name}
        Age is {age}
        {list[2]}
      </div>
    </>
  );
}
 