import React from "react";

function Panel(props) {
  return (
    <div className="Pannello">
      <div className="Pannello-sinistra">{props.sinistra}</div>
      <div className="Pannello-destra">{props.destra}</div>
    </div>
  );
}

export default Panel;
