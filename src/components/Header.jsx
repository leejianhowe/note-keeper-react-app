import React from "react"

//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.

function Header() {
  
    let header = "Keeper"
    
    return (
      <header><h1>
        {header}
      </h1>
      </header>
    );
  }
  
export default Header;