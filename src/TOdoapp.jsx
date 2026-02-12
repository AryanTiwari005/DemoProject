export default function TodoApp() {
    function handleSubmit(e){
        e.preventDefault();
        const input = e.target.elements.task.value;
        const hii = document.getElementById("taskList");
        if (input.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        const li = document.createElement("li");
        li.textContent = input;
        hii.appendChild(li);
        e.target.reset();
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>  
                <input type="text" name="task" placeholder="Write something dammit!!!" />
                <input type="submit" value="Add Task" />
            </form>
            <ul id="taskList" onClick={handleSubmit}>
            
            </ul>
            



        </div>
    )
}
