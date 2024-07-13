import {Task} from './Task'

export const PostItSimulator=() => {
    return (
        <div className='container mt-3'>
            <h1 className='txt-negro'><strong>Post It Simulator!</strong></h1>
            <div className='d-flex gap-5 mt-4'>
                <div className='d-flex col-8 gap-3'>
                    <input className='form-control' type="text" placeholder='Titulo'/>
                    <input className='form-control' type="text" placeholder='Descripcion'/>
                    <div className='d-flex align-items-center gap-3'>
                        <input className='form-check-input' type="checkbox" name="" id="" />
                        <label style={{color:'white'}}>Importante!</label>
                    </div>
                </div>
                <div className='d-grid col-2 mx-auto'>
                    <button className='btn btn-negro'>AGREGAR</button>
                </div>
            </div>
        </div>
    )
}