const TodoItem = (todo) => {
   return(`
       <li>
          <input type="checkbox" ${todo.done ? "check" : ""}/>
          ${todo.title}
          (${todo.status})
       </li>
   `);
}
export default TodoItem;