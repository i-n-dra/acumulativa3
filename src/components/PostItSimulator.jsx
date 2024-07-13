import {Task} from './Task'
import { useRef } from 'react'

export function PostItSimulator() {
    const titleRef=useRef();
    const descRef=useRef();
    const impRef=useRef();

    function addTask(){
        console.log('boton agregar');
        const title=titleRef.current.value;
        const desc=descRef.current.value;
        const important=impRef.current.checked;
        console.log('title :',title,'desc: ',desc,'is important :',important);
    }
    return (
        <div className='container mt-3'>
            <h1 className='txt-negro'><strong>Post It Simulator!</strong></h1>
            <div className='d-flex gap-5 mt-4'>
                <div className='d-flex col-8 gap-3'>
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
            <div>
                <Task title='' desc=''/>
            </div>
        </div>
    )
}