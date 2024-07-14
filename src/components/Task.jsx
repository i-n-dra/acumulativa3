export function Task({task}) {
    const {id,title,desc,important}=task;

    if (important){
        return (
            <div className="iTask m-3 p-3">
                <div className="flex-column">
                    <h3><strong>{title}</strong></h3>
                    <p>{desc}</p>
                </div>
                <div>
                    <button className="btn-close"></button>
                </div>
            </div>
        )
    }
    else {
        return (
        <div className="niTask m-3 p-3">
            <div className="flex-column">
                <h3><strong>{title}</strong></h3>
                <p>{desc}</p>
            </div>
            <div>
                <button className="btn-close"></button>
            </div>
        </div>
        )
    }
}
