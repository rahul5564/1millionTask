import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SectionItem from './data';
import "./data.css";

const Resume = () => {
  const [sections, setSections] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    // Use the JSON data directly instead of fetching from an API
    setSections([
      {
        "title": "Work Experience",
        "items": [
          {
            "position": "Intern",
            "company": "XYZ Corporation",
            "location": "San Francisco, USA",
            "startDate": "May 2019",
            "endDate": "Aug 2019",
            "description": "Assisted with frontend development and bug fixing."
          },
          {
            "position": "Software Developer",
            "company": "ABC Tech",
            "location": "New York, USA",
            "startDate": "Jan 2020",
            "endDate": "Present",
            "description": "Developed web applications using React and Node.js."
          }
        ]
      },
      {
        "title": "Education",
        "items": [
          {
            "degree": "Bachelor of Science in Computer Science",
            "college": "University of ABC",
            "location": "Chicago, USA",
            "graduationDate": "May 2019"
          },
          {
            "degree": "High School Diploma",
            "college": "High School XYZ",
            "location": "Los Angeles, USA",
            "graduationDate": "Jun 2015"
          }
        ]
      }
    ]);
  }, []);

  const moveItem = (fromIndex, toIndex) => {
    const newSections = [...sections];
    const [movedItem] = newSections[0].items.splice(fromIndex, 1);
    newSections[0].items.splice(toIndex, 0, movedItem);
    setSections(newSections);
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div style={{ width: '210mm', height: '297mm', margin: '20px auto', backgroundColor }}>
      <div className='Main'>
        <h1>1Million-Resume</h1>
      </div>
      <div>
        <label htmlFor="colorPicker">Set background-color</label>
        <select id="colorPicker" onChange={handleColorChange}>
          <option value="white">White</option>
          <option value="lightgrey">Light Grey</option>
          <option value="lightblue">Light Blue</option>
        </select>
      </div>
        <div className='Outer'>
        </div>

      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <div>
            {section.items.map((item, itemIndex) => (
              <SectionItem key={itemIndex} data={item} index={itemIndex} moveItem={moveItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
