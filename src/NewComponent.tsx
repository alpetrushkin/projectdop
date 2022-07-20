import React from 'react';

type NewComponentType = {
    // students:Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
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
    );
};

