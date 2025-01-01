import React, { useState } from "react";
import WorkflowCanvas from "./components/WorkflowCanvas";
import PropertiesPanel from "./components/PropertiesPanel";
import "./App.css";

export default function App() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [elements, setElements] = useState([]);

  const handleUpdate = (id, data) => {
    setElements((els) =>
      els.map((el) => (el.id === id ? { ...el, data: { ...el.data, ...data } } : el))
    );
  };

  return (
    <div style={{ display: "flex" }}>
      <WorkflowCanvas
        elements={elements}
        setElements={setElements}
        setSelectedElement={setSelectedElement}
      />
      <PropertiesPanel selectedElement={selectedElement} onUpdate={handleUpdate} />
    </div>
  );
}
