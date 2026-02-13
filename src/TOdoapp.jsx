export default function TodoApp() {

    const [tasks, setTasks] = useState("");
    const [taskList, setTaskList] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        const input = e.target.elements.task.value;
        const hii = document.getElementById("taskList");
        if (input.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        const li = document.createElement("li");
       li.innerHTML = `
        <span>${input}</span>
        <button class="deleteBtn">Delete</button>` ;

        document.getElementById("taskList").appendChild(li);
        e.target.reset();
        
    }
     function handleDelete(e) {
        if (e.target.classList.contains("deleteBtn")) {
            e.target.parentElement.remove(); 
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>  
                <input type="text" name="task" placeholder="Write something dammit!!!" />
                <button type="submit">Add Task</button>
            </form>
            <ul id="taskList" onClick={handleDelete}>
            
            </ul>
            



        </div>
    )
}
