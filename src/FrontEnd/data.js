import React from 'react';

const SectionItem = ({ data, index, moveItem }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    moveItem(draggedIndex, index);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '4px' }}
    >
      <strong>{data.position || data.degree}</strong>
      <p>{data.company || data.college}</p>
      <p>{data.location}</p>
      <p>{data.startDate} - {data.endDate || data.graduationDate}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default SectionItem;
