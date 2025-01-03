
const NodeSelectionBar = ({onDragStart, text}) => {
  return (
    <div
        onDragStart={(event) => onDragStart(event, `${text}`)}
        draggable
        className="node-container"
      >
       {text}
      </div>
  )
}

export default NodeSelectionBar
