import {Task} from './Task';
import { useRef, useState } from 'react';
import {v4 as uuid} from 'uuid';
import Swal from 'sweetalert2';

export const PostItSimulator=() => {
    const titleRef=useRef();
    const descRef=useRef();
    const impRef=useRef();
    const [taskList, setTaskList]=useState([
        {id: uuid(), title:'tarea 1', desc:'Lorem ipsum, odit eaque, optio voluptatibus consequatur totam, nostrum corporis rerum.', important:true},
        {id: uuid(), title:'tarea 2', desc:'kwegio efknew ogpqngwrhnrwh', important:false},
        {id: uuid(), title:'tarea 3', desc:'kwegquofbwqoiyffqbwe egvsegweegrwh', important:true},
        {id: uuid(), title:'tarea 4', desc:'kwegyf jfbkse efkjwef ewfjkb fheof wefj wefewj f ewfj fkwe fje f fqbwe egvsegweegrwh', important:true},
        {id: uuid(), title:'tarea 5', desc:'gvsgfqbwe eegweegrwh', important:false}
    ]);

    const addTask=() => {
        console.log('boton agregar');
        const title=titleRef.current.value;
        const desc=descRef.current.value;
        const important=impRef.current.checked;
        console.log('title :',title,'desc: ',desc,'is important :',important);

        if (desc.trim()===''){
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
            icon: "error",
            title: "La descripcion esta vacia"
            });

            return
        }

        const newTask={
            id: uuid(),
            title: title,
            desc: desc,
            important: important
        }
        const newTaskList=[...taskList,newTask];
        setTaskList(newTaskList);
        console.log('task list: ',taskList,'\nnew task list: ',newTaskList);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
        icon: "success",
        title: "Tarea agregada"
        });

    }
    return (
        <div className='container mt-3'>
            <h1 className='txt-negro'><strong>Post It Simulator!</strong></h1>
            <div className='d-flex gap-5 mt-4'>
                <div className='d-flex col-9 gap-3'>
                    <input className='form-control' type="text" placeholder='Titulo' ref={titleRef}/>
                    <input className='form-control' type="text" placeholder='Descripcion' ref={descRef}/>
                    <div className='d-flex align-items-center gap-3'>
                        <input className='form-check-input' type="checkbox" ref={impRef} />
                        <label style={{color:'white'}}>Importante!</label>
                    </div>
                </div>
                <div className='d-grid col-2 mx-auto'>
                    <button className='btn btn-negro' onClick={addTask}>AGREGAR</button>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly mt-5'>
                {
                    taskList.map(task => <Task task={task} key={task.id}/>)
                }
            </div>
        </div>
    )
}