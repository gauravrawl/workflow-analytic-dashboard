/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { setType } from "../Store/slice/workSlice";
import { useDispatch } from "react-redux";
import NodeSelectionBar from "./NodeSelectionBar";
import BarGraph from "./Analytics/BarGraph";
import LineChart from "./Analytics/LineChart";

const Sidebar = ({ selectedNode, updateNode }) => {
  const [formData, setFormData] = useState({
    label: '',
    executionTime: 0,
    nodeType: '',
  });

  const dispatch = useDispatch()

  useEffect(() => {
    if (selectedNode) {
      setFormData({
        label: selectedNode.data.label || '',
        executionTime: selectedNode.data.executionTime || 0,
        nodeType: selectedNode.data.nodeType || '',
      });
    }
  }, [selectedNode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'executionTime' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedNode) {
      updateNode({
        ...selectedNode,
        data: {
          ...selectedNode.data,
          ...formData,
        },
      });
    }
  };

  // if (!selectedNode) {
  //   return (
  //     <aside style={{ padding: '10px', borderLeft: '1px solid #ddd', width: '300px' }}>
  //       <p>Select a node to edit its properties.</p>
  //     </aside>
  //   );
  // }


  const onDragStart = (event, type) => {
    dispatch(setType(type))
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <NodeSelectionBar text={'Start'} onDragStart={onDragStart}/>
      <NodeSelectionBar text={'Decision'} onDragStart={onDragStart}/>
      <NodeSelectionBar text={'Task'} onDragStart={onDragStart}/>
      <NodeSelectionBar text={'End'} onDragStart={onDragStart}/>
{
  !selectedNode ? <aside style={{ padding: '10px', borderLeft: '1px solid #ddd', width: '300px' }}>
         <p>Select a node to edit its properties.</p>
       </aside>  : 
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name:
            <input
              type="text"
              name="label"
              value={formData.label}
              onChange={handleChange}
              style={{ width: '100%', padding: '5px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Execution Time (ms):
            <input
              type="number"
              name="executionTime"
              value={formData.executionTime}
              onChange={handleChange}
              style={{ width: '100%', padding: '5px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Type:
            <input
              type="text"
              name="nodeType"
              value={formData.nodeType}
              onChange={handleChange}
              style={{ width: '100%', padding: '5px', marginTop: '5px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '5px 10px' }}>
          Save
        </button>
      </form>
}
    </aside>
  );
};

export default Sidebar;
