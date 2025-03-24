import React from "react";

const Icons = {
  Photoshop: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Ps</text>
    </svg>
  ),
  Illustrator: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Ai</text>
    </svg>
  ),
  Premiere: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Pr</text>
    </svg>
  ),
  Lightroom: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Lr</text>
    </svg>
  ),
  XD: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Xd</text>
    </svg>
  ),
  InDesign: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Id</text>
    </svg>
  ),
  AfterEffects: (props) => (
    <svg width="100" height="100" viewBox="0 0 100 100" {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white">
      <rect x="10" y="10" width="80" height="80" rx="15" strokeWidth="2"/>
      <text x="30" y="60" fontFamily="Arial" fontSize="40" fill="white">Ae</text>
    </svg>
  ),
};

export default Icons;
