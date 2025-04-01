/*4.Implement a drag-and-drop interface: Create a component that allows users to
drag and drop items to reorder them or move them between different lists. Use
hooks and refs to handle the interactions */

import React, { useState, useRef } from "react";
import "./DragAndDrop.css"; // Optional for styling

const DragAndDrop = () => {
  const [listA, setListA] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [listB, setListB] = useState(["Item 5", "Item 6", "Item 7", "Item 8"]);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, item, list) => {
    dragItem.current = { item, list };
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      e.target.classList.add("dragging");
    }, 0);
  };

  const handleDragEnter = (e, targetItem, targetList) => {
    if (dragNode.current !== e.target) {
      if (dragItem.current.list === targetList) {
        const newList = [...dragItem.current.list];
        newList.splice(dragItem.current.item, 1);
        newList.splice(targetItem, 0, dragItem.current.list[dragItem.current.item]);
        dragItem.current.list === listA ? setListA(newList) : setListB(newList);
        dragItem.current.item = targetItem;
      } else {
        const currentList = [...dragItem.current.list];
        const targetListCopy = [...targetList];
        targetListCopy.splice(targetItem, 0, dragItem.current.list[dragItem.current.item]);
        currentList.splice(dragItem.current.item, 1);

        dragItem.current.list === listA ? setListA(currentList) : setListB(currentList);
        targetList === listA ? setListA(targetListCopy) : setListB(targetListCopy);
      }
    }
  };

  const handleDragEnd = () => {
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragNode.current.classList.remove("dragging");
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (index, list) => {
    if (
      dragItem.current &&
      dragItem.current.item === index &&
      dragItem.current.list === list
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };

  return (
    <div className="drag-and-drop">
      <div className="dnd-group">
        <h3>List A</h3>
        {listA.map((item, index) => (
          <div
            key={index}
            className={getStyles(index, listA)}
            draggable
            onDragStart={(e) => handleDragStart(e, index, listA)}
            onDragEnter={
              dragItem.current ? (e) => handleDragEnter(e, index, listA) : null
            }
          >
            {item}
          </div>
        ))}
      </div>

      <div className="dnd-group">
        <h3>List B</h3>
        {listB.map((item, index) => (
          <div
            key={index}
            className={getStyles(index, listB)}
            draggable
            onDragStart={(e) => handleDragStart(e, index, listB)}
            onDragEnter={
              dragItem.current ? (e) => handleDragEnter(e, index, listB) : null
            }
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
