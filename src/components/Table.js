import React from 'react';

export default function Table(props) {
   const satellites = props.satellites;
   if(satellites.length === 0) {
     return(
       <h2>No satellites here!</h2>
     );
   }
 
   return (
     <table>
     <thead>
       <tr>
         <th>Id</th>
         <th>Name</th>
         <th>Type</th>
         <th>Launch Date</th>
         <th>Orbit Type</th>
         <th>Operational</th>
       </tr>
       </thead>
       <tbody>
         {satellites.map((satellite, index) => (
           <tr key={index}>
             <td>{satellite.id}</td>
             <td>{satellite.name}</td>
             <td>{satellite.type}</td>
             <td>{satellite.launchDate}</td>
             <td>{satellite.orbitType}</td>
             <td style={satellite.operational ? {color: "green"} : {color: "red"}}>{satellite.operational.toString()}</td>
           </tr>
         ))}
       </tbody>
       </table>
   );
 }