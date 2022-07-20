import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    let [students, setStudents] = useState([
        {id: 1, name: 'Alex', age: 23},
        {id: 2, name: 'Dima', age: 18},
        {id: 3, name: 'Denis', age: 38},
        {id: 4, name: 'Sveta', age: 17},
        {id: 5, name: 'Ivan', age: 20},
        {id: 6, name: 'Olga', age: 24},
        {id: 7, name: 'Valera', age: 33},
        {id: 1, name: 'Alex', age: 23},
        {id: 2, name: 'Dima', age: 18},
        {id: 3, name: 'Denis', age: 38},
        {id: 4, name: 'Sveta', age: 17},
        {id: 5, name: 'Ivan', age: 20},
        {id: 6, name: 'Olga', age: 24},
        {id: 7, name: 'Valera', age: 33},
    ])

    return (
        <div className="App">
            <NewComponent students={students}/>
        </div>
    );
}

export default App;
