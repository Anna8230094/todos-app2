import React, { useState } from "react";

function NewTodoForm(props:{addTodo: Function}) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

     
    const submitTodo = ()=>{
        if (description!=='' && assigned!=='') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    const descriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('description', event.target.value);
        setDescription(event.target.value);
    }

    const assignedChanged = (event:  React.ChangeEvent<HTMLInputElement>) => {
        console.log('assigned', event.target.value);
        setAssigned(event.target.value);
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='from-label'>Assigned </label>
                    <input type='text'
                        className='form-control'
                        required
                        onChange={assignedChanged}
                        value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='from-label'>Description </label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        onChange={descriptionChanged}
                        value={description}
                    ></textarea>
                </div>
                <button className='btn btn-primary mt-3' onClick={submitTodo}>Add todo</button>
            </form>
        </div>
    )
}
export default NewTodoForm
