import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Menu/Footer";

function Layouts({children}) {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default Layouts;
