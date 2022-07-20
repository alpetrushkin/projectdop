import React from 'react';

/*type NewComponentType = {
   // students:Array<StudentType>
   students: StudentType[]
}

type StudentType = {
   id: number,
   name: string,
   age: number
}*/

/*export const NewComponent = (props: NewComponentType) => {
   const topCars = [
      {manufacturer: 'BMW', model: 'm5cs'},
      {manufacturer: 'Mercedes', model: 'e63s'},
      {manufacturer: 'Audi', model: 'rs6'},
   ]
   return (
      <div>
         <ul>
            {props.students.map((objectFromStudentArray, index) => {
               return (
                  <li key={index}>
                     <span>{objectFromStudentArray.name}</span>
                     <span> age: {objectFromStudentArray.age}</span>
                  </li>
               )
            })}
         </ul>
      </div>
   );*/
// };

type NewComponentType = {
   topCars: Array<topCarsArray>
}

type topCarsArray = {
   manufacturer: string,
   model: string
}

export const NewComponent = (props: NewComponentType) => {
   return (
      <table>

         {props.topCars.map((objTopCars, index) => {
            debugger
            return (
               <tr key={index}>
                  <th>{objTopCars.manufacturer}</th>
                  <th>{objTopCars.model}</th>
               </tr>
            )
         })}
      </table>
   )
}
