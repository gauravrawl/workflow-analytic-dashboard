import { useRef, useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Position,
  useReactFlow,
  Background,
} from '@xyflow/react';
import Sidebar from './Sidebar';
import '@xyflow/react/dist/style.css';
import { useSelector } from 'react-redux';
import SidebarForChart from './SidebarForChart';

const initialNodes = [
  {
    id: '1',
    type: 'Start',
    data: { label: 'Start' },
    position: { x: 250, y: 5 },
    sourcePosition: Position.Right,
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const { type } = useSelector((state) => state.workflow)
  const [selectedNode, setSelectedNode] = useState(null);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      if (!type) return;
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, type],
  );

  /** Storing data to local */
  useEffect(() => {
    localStorage.setItem('workflowNodes', JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem('workflowEdges', JSON.stringify(edges));
  }, [edges]);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);
  

  const updateNode = (updatedNode) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === updatedNode.id
          ? { ...node, data: { ...updatedNode.data } }
          : node
      )
    );
    setSelectedNode(updatedNode);
  };
  

  return (
    <div className="dndflow" style={{ height: '100vh' }}>
    <Sidebar selectedNode={selectedNode} updateNode={updateNode} />
      <div className="reactflow-wrapper" ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onNodeClick={onNodeClick}
          fitView
          style={{ backgroundColor: "#343434" }}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    <SidebarForChart  />
    </div>
  );
};

export default DnDFlow;
