export function Task({task, deleteTask}) {
    const {id,title,desc,important}=task;

    const btnDelete=()=> deleteTask(id)

    if (important){
        return (
            <div className="iTask m-3 p-3">
                <div className="flex-column">
                    <h3 className="w-75"><strong>{title}</strong></h3>
                    <p>{desc}</p>
                </div>
                <div>
                    <button className="btn-close" onClick={btnDelete}></button>
                </div>
            </div>
        )
    }
    else {
        return (
        <div className="niTask m-3 p-3">
            <div className="flex-column w-75">
                <h3 className="w-75"><strong>{title}</strong></h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className="btn-close" onClick={btnDelete}></button>
            </div>
        </div>
        )
    }
}
