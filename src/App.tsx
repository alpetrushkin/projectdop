import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    // let [students, setStudents] = useState([
    //     {id: 1, name: 'Alex', age: 23},
    //     {id: 2, name: 'Dima', age: 18},
    //     {id: 3, name: 'Denis', age: 38},
    //     {id: 4, name: 'Sveta', age: 17},
    //     {id: 5, name: 'Ivan', age: 20},
    //     {id: 6, name: 'Olga', age: 24},
    //     {id: 7, name: 'Valera', age: 33},
    //     {id: 1, name: 'Alex', age: 23},
    //     {id: 2, name: 'Dima', age: 18},
    //     {id: 3, name: 'Denis', age: 38},
    //     {id: 4, name: 'Sveta', age: 17},
    //     {id: 5, name: 'Ivan', age: 20},
    //     {id: 6, name: 'Olga', age: 24},
    //     {id: 7, name: 'Valera', age: 33},
    // ])
    const topCars = [
        {manufacturer: 'Suzuki', model: 'vitara'},
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
        {manufacturer: 'Lada', model: 'vesta'},
    ]

    return (
        <div className="App">
            {/*<NewComponent students={students}/>*/}
            <NewComponent topCars={topCars}/>
        </div>
    );
}

export default App;
