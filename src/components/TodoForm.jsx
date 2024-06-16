import React from 'react';
import { useState } from 'react';

import { IoIosAddCircle } from "react-icons/io";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [category, setcategory] = useState ('');

    const handSubmit = (e) => {
        e.preventDefault();

        if(!value || !category) return;

        //Add todo
        addTodo(value, category);
        setValue('');
        setcategory('');
    };

  return (
    <div>
        <form onSubmit={handSubmit} className='todo-form'> 
            <div>
                <h2>Título</h2>
                <input
                    type="text"
                    placeholder='Digite o título'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <div>
                <h2>Categoria</h2>
                <select value={category} onChange={(e) => setcategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
            </div>
            <button type='submit' id='addBtn'><IoIosAddCircle /></button>
        </form>
    </div>
  )
};

export default TodoForm;