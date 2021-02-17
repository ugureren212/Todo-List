const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

//adds template for todo's
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `
  list.innerHTML += html;
} 

//event listener for add form. Gets value within "add" text field and creates new li template through generateTemplate()
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
   if(todo.length > 0){
     generateTemplate(todo);
     addForm.reset();
    }
  });


//Event listener for when user clicks the bin icon, which contains a "delete" class.
list.addEventListener("click", (e) => {
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove();
  }
})

//search function that contains logic for searching.
const filterTodos = (searchVal) => {
  //add's the class "filtered" to todo's that does not contain searched value
  Array.from(list.children)
  .filter((todo) => {
    if(todo.textContent.toLowerCase().includes(searchVal) === false){return todo};
  })
  .forEach((todo) => {
    todo.classList.add("filtered");
  }) 

  //removes the class "filtered" to todo's that does contain searched value
  Array.from(list.children)
  .filter((todo) => {
    if(todo.textContent.toLowerCase().includes(searchVal) === true){return todo};
  })
  .forEach((todo) => {
    todo.classList.remove("filtered");
  }) 
    
  };

//event listener that triggers search function
search.addEventListener("keyup", () => {
  //need to lower case searchVal to alllow searching for Uppercase letters
  const searchVal =search.value.trim().toLowerCase();
  filterTodos(searchVal);
})

