// DOM Cache for Photo Scroll Index
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const images = document.querySelector('.medellin');
// DOM FOR PICTURE SCROLL pages
const photos = document.querySelector('.photos');
// DOM FOR MEMORIES medellin
const todoForm6 = document.querySelector('.form6');          
const todoInput6 = document.querySelector('.todo-input6');        
const todoItemsList6 = document.querySelector('.todo-items6'); 
// DOM for memories aguadas 
const todoForm1 = document.querySelector('.form1');          
const todoInput1 = document.querySelector('.todo-input1');        
const todoItemsList1 = document.querySelector('.todo-items1');
// DOM for memory jerico
const todoForm2 = document.querySelector('.form2');          
const todoInput2 = document.querySelector('.todo-input2');       
const todoItemsList2 = document.querySelector('.todo-items2');
// DOM for memory jardin 
const todoForm3 = document.querySelector('.form3');         
const todoInput3 = document.querySelector('.todo-input3');        
const todoItemsList3 = document.querySelector('.todo-items3');
// DOM for memory retiro
const todoForm4 = document.querySelector('.form4');          
const todoInput4 = document.querySelector('.todo-input4');        
const todoItemsList4 = document.querySelector('.todo-items4');
// DOM for memory el cielo
const todoForm5 = document.querySelector('.form5');         
const todoInput5 = document.querySelector('.todo-input5');        
const todoItemsList5 = document.querySelector('.todo-items5');

// PIC SCROLL JAVAS
let current_img = 0;

next.addEventListener('click', () => {
    if (current_img < images.children.length - 1) {
        current_img++
        images.style.transitionDuration = '0.5s';
        images.style.transform = `translate(-${current_img * 70}vw)`;
        } else {
            return;
        }
});

previous.addEventListener('click', () => {
    if (current_img > 0) {
        current_img--
        images.style.transitionDuration = '0.5s';
        images.style.transform = `translate(-${current_img * 70}vw)`;
        } else {
            return;
        }
});

// PICTURE SCROLL pages
    next.addEventListener('click', () => {
        if (current_img < photos.children.length - 1) {
            current_img++
            photos.style.transitionDuration = '0.5s';
            photos.style.transform = `translate(-${current_img * 70}vw)`;
            } else {
                return;
            }
    });

    previous.addEventListener('click', () => {
        if (current_img > 0) {
            current_img--
            photos.style.transitionDuration = '0.5s';
            photos.style.transform = `translate(-${current_img * 70}vw)`;
            } else {
                return;
            }
    });

    // ADD MEMORY medellin page 
    let todos6 = [];   // array for ToDo's

    // event listener for form 
    todoForm6.addEventListener('submit', function(event) {
        event.preventDefault();     //prevent page from reloading when submitting form
        addTodo(todoInput6.value);   // call addTodo function with input box value
    });

    // add ToDo function 
    function addTodo(item) {
        if (item !== '') {          // if input is not empty
            const todo = {          // takes input and creates object(JSON syntax!)
                id: Date.now(),
                name: item, 
                completed: false
        };
            todos6.push(todo);           //add item to array
            addToLocalStorage(todos6)    // stores and then run the render function 
            todoInput6.value = '';       // clears text box
        }
    };

    function renderTodos(todos6) {               // renders to the <ul> takes the array as arguments
        todoItemsList6.innerHTML = '';           // clears the <ul> 
        todos6.forEach(function(item) {          // loops through array   
            const checked = item.completed ? 'checked' : null;      // checks if item is completed
            const li = document.createElement('li');                // create <li>
            li.setAttribute('class', 'item');                       // set li class "item"
            li.setAttribute('data-key', item.id);                 // set data-key to item id
            if (item.completed === true) {                          // line through completed
                li.classList.add('checked');
            }                                                       // assign text to <li>
            li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>  
            ${item.name}
            <button class="delete-button">X</button>`;
            todoItemsList6.append(li);                               // assign <li> to <ul>
        });
    }    

    function addToLocalStorage(todos6) {                             // add to localStorage w/ arrays as arguments
        localStorage.setItem('todos6', JSON.stringify(todos6));       // convert array to JSON string (key = 'todos'/value=array)
        renderTodos(todos6);                                         // runs entire render function after saving to localStorage to show changes
    }

    function getFromLocalStorage() {                                // function to get storage
        const reference = localStorage.getItem('todos6');            // variable for items
        if (reference) {                                            // if exists
            todos6 = JSON.parse(reference);                          // array = parse the storage
            renderTodos(todos6);                                     // run the render function to show them
        } 
    }

    function toggle(id) {                                       // toggle to complete or not complete  
        todos6.forEach(function(item) {                          // loop takes each item as argument  
            if (item.id == id) {                                // if item id matches
                item.completed = !item.completed;               // item.completed = false
            }                                                   // us == not === cause of different types
        })
        addToLocalStorage(todos6);                           // update list function
    }

    function deleteTodo(id) {                                   // delete a todo
        todos6 = todos6.filter(function(item) {                   // filter() array, takes each item as argument
            return item.id != id;                               // filters out <li> with id and updates array
        });                                                     // return item.id == false ... makes new array of item.id false
            addToLocalStorage(todos6)                            // update list function
    }

    getFromLocalStorage();                                              // initialize function to get storage and show 

    todoItemsList6.addEventListener('click', function(event) {           // function listen to delete and check 'clicks'
        if (event.target.type === 'checkbox') {                                          // if click is checkbox 
            toggle(event.target.parentElement.getAttribute('data-key'));                 // toggle the state
        }
        if (event.target.classList.contains('delete-button')) {                          // if click is delete
            deleteTodo(event.target.parentElement.getAttribute('data-key'));  // (get id from data-key attributes value                   
        }                                                                     // of parent <li> where the delte-button 
    });  
    
 // ADD MEMORY agaudas page
 let todos1 = [];   // array for ToDo's

 // event listener for form 
 todoForm1.addEventListener('submit', function(event) {
     event.preventDefault();     //prevent page from reloading when submitting form
     addTodo(todoInput1.value);   // call addTodo function with input box value
 });

 // add ToDo function 
 function addTodo(item) {
     if (item !== '') {          // if input is not empty
         const todo = {          // takes input and creates object(JSON syntax!)
             id: Date.now(),
             name: item, 
             completed: false
     };
         todos1.push(todo);           //add item to array
         addToLocalStorage(todos1)    // stores and then run the render function 
         todoInput1.value = '';       // clears text box
     }
 };

 function renderTodos(todos1) {               // renders to the <ul> takes the array as arguments
     todoItemsList1.innerHTML = '';           // clears the <ul> 
     todos1.forEach(function(item) {          // loops through array   
         const checked = item.completed ? 'checked' : null;      // checks if item is completed
         const li = document.createElement('li');                // create <li>
         li.setAttribute('class', 'item');                       // set li class "item"
         li.setAttribute('data-key', item.id);                 // set data-key to item id
         if (item.completed === true) {                          // line through completed
             li.classList.add('checked');
         }                                                       // assign text to <li>
         li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>  
         ${item.name}
         <button class="delete-button">X</button>`;
         todoItemsList1.append(li);                               // assign <li> to <ul>
     });
 }    

 function addToLocalStorage(todos1) {                             // add to localStorage w/ arrays as arguments
     localStorage.setItem('todos1', JSON.stringify(todos1));       // convert array to JSON string (key = 'todos'/value=array)
     renderTodos(todos1);                                         // runs entire render function after saving to localStorage to show changes
 }

 function getFromLocalStorage() {                                // function to get storage
     const reference = localStorage.getItem('todos1');            // variable for items
     if (reference) {                                            // if exists
         todos1 = JSON.parse(reference);                          // array = parse the storage
         renderTodos(todos1);                                     // run the render function to show them
     } 
 }

 function toggle(id) {                                       // toggle to complete or not complete  
     todos1.forEach(function(item) {                          // loop takes each item as argument  
         if (item.id == id) {                                // if item id matches
             item.completed = !item.completed;               // item.completed = false
         }                                                   // us == not === cause of different types
     })
     addToLocalStorage(todos1);                           // update list function
 }

 function deleteTodo(id) {                                   // delete a todo
     todos1 = todos1.filter(function(item) {                   // filter() array, takes each item as argument
         return item.id != id;                               // filters out <li> with id and updates array
     });                                                     // return item.id == false ... makes new array of item.id false
         addToLocalStorage(todos1)                            // update list function
 }

 getFromLocalStorage();                                              // initialize function to get storage and show 

 todoItemsList1.addEventListener('click', function(event) {           // function listen to delete and check 'clicks'
     if (event.target.type === 'checkbox') {                                          // if click is checkbox 
         toggle(event.target.parentElement.getAttribute('data-key'));                 // toggle the state
     }
     if (event.target.classList.contains('delete-button')) {                          // if click is delete
         deleteTodo(event.target.parentElement.getAttribute('data-key'));  // (get id from data-key attributes value                   
     }                                                                     // of parent <li> where the delte-button 
 });    
 
// ADD MEMORY JERICO 
let todos2 = [];   // array for ToDo's

// event listener for form 
todoForm2.addEventListener('submit', function(event) {
    event.preventDefault();     //prevent page from reloading when submitting form
    addTodo(todoInput2.value);   // call addTodo function with input box value
});

// add ToDo function 
function addTodo(item) {
    if (item !== '') {          // if input is not empty
        const todo = {          // takes input and creates object(JSON syntax!)
            id: Date.now(),
            name: item, 
            completed: false
    };
        todos2.push(todo);           //add item to array
        addToLocalStorage(todos2)    // stores and then run the render function 
        todoInput2.value = '';       // clears text box
    }
};

function renderTodos(todos2) {               // renders to the <ul> takes the array as arguments
    todoItemsList2.innerHTML = '';           // clears the <ul> 
    todos2.forEach(function(item) {          // loops through array   
        const checked = item.completed ? 'checked' : null;      // checks if item is completed
        const li = document.createElement('li');                // create <li>
        li.setAttribute('class', 'item');                       // set li class "item"
        li.setAttribute('data-key', item.id);                 // set data-key to item id
        if (item.completed === true) {                          // line through completed
            li.classList.add('checked');
        }                                                       // assign text to <li>
        li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>  
        ${item.name}
        <button class="delete-button">X</button>`;
        todoItemsList2.append(li);                               // assign <li> to <ul>
    });
}    

function addToLocalStorage(todos2) {                             // add to localStorage w/ arrays as arguments
    localStorage.setItem('todos2', JSON.stringify(todos2));       // convert array to JSON string (key = 'todos'/value=array)
    renderTodos(todos2);                                         // runs entire render function after saving to localStorage to show changes
}

function getFromLocalStorage() {                                // function to get storage
    const reference = localStorage.getItem('todos2');            // variable for items
    if (reference) {                                            // if exists
        todos2 = JSON.parse(reference);                          // array = parse the storage
        renderTodos(todos2);                                     // run the render function to show them
    } 
}

function toggle(id) {                                       // toggle to complete or not complete  
    todos2.forEach(function(item) {                          // loop takes each item as argument  
        if (item.id == id) {                                // if item id matches
            item.completed = !item.completed;               // item.completed = false
        }                                                   // us == not === cause of different types
    })
    addToLocalStorage(todos2);                           // update list function
}

function deleteTodo(id) {                                   // delete a todo
    todos2 = todos2.filter(function(item) {                   // filter() array, takes each item as argument
        return item.id != id;                               // filters out <li> with id and updates array
    });                                                     // return item.id == false ... makes new array of item.id false
        addToLocalStorage(todos2)                            // update list function
}

getFromLocalStorage();                                              // initialize function to get storage and show 

todoItemsList2.addEventListener('click', function(event) {           // function listen to delete and check 'clicks'
    if (event.target.type === 'checkbox') {                                          // if click is checkbox 
        toggle(event.target.parentElement.getAttribute('data-key'));                 // toggle the state
    }
    if (event.target.classList.contains('delete-button')) {                          // if click is delete
        deleteTodo(event.target.parentElement.getAttribute('data-key'));  // (get id from data-key attributes value                   
    }                                                                     // of parent <li> where the delte-button 
});

// ADD MEMORY JARDIN
 let todos3 = [];   // array for ToDo's

 // event listener for form 
 todoForm3.addEventListener('submit', function(event) {
     event.preventDefault();     //prevent page from reloading when submitting form
     addTodo(todoInput3.value);   // call addTodo function with input box value
 });

 // add ToDo function 
 function addTodo(item) {
     if (item !== '') {          // if input is not empty
         const todo = {          // takes input and creates object(JSON syntax!)
             id: Date.now(),
             name: item, 
             completed: false
     };
         todos3.push(todo);           //add item to array
         addToLocalStorage(todos3)    // stores and then run the render function 
         todoInput3.value = '';       // clears text box
     }
 };

 function renderTodos(todos3) {               // renders to the <ul> takes the array as arguments
     todoItemsList3.innerHTML = '';           // clears the <ul> 
     todos3.forEach(function(item) {          // loops through array   
         const checked = item.completed ? 'checked' : null;      // checks if item is completed
         const li = document.createElement('li');                // create <li>
         li.setAttribute('class', 'item');                       // set li class "item"
         li.setAttribute('data-key', item.id);                 // set data-key to item id
         if (item.completed === true) {                          // line through completed
             li.classList.add('checked');
         }                                                       // assign text to <li>
         li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>  
         ${item.name}
         <button class="delete-button">X</button>`;
         todoItemsList3.append(li);                               // assign <li> to <ul>
     });
 }    

 function addToLocalStorage(todos3) {                             // add to localStorage w/ arrays as arguments
     localStorage.setItem('todos3', JSON.stringify(todos3));       // convert array to JSON string (key = 'todos'/value=array)
     renderTodos(todos3);                                         // runs entire render function after saving to localStorage to show changes
 }

 function getFromLocalStorage() {                                // function to get storage
     const reference = localStorage.getItem('todos3');            // variable for items
     if (reference) {                                            // if exists
         todos3 = JSON.parse(reference);                          // array = parse the storage
         renderTodos(todos3);                                     // run the render function to show them
     } 
 }

 function toggle(id) {                                       // toggle to complete or not complete  
     todos3.forEach(function(item) {                          // loop takes each item as argument  
         if (item.id == id) {                                // if item id matches
             item.completed = !item.completed;               // item.completed = false
         }                                                   // us == not === cause of different types
     })
     addToLocalStorage(todos3);                           // update list function
 }

 function deleteTodo(id) {                                   // delete a todo
     todos3 = todos3.filter(function(item) {                   // filter() array, takes each item as argument
         return item.id != id;                               // filters out <li> with id and updates array
     });                                                     // return item.id == false ... makes new array of item.id false
         addToLocalStorage(todos3)                            // update list function
 }

 getFromLocalStorage();                                              // initialize function to get storage and show 

 todoItemsList3.addEventListener('click', function(event) {           // function listen to delete and check 'clicks'
     if (event.target.type === 'checkbox') {                                          // if click is checkbox 
         toggle(event.target.parentElement.getAttribute('data-key'));                 // toggle the state
     }
     if (event.target.classList.contains('delete-button')) {                          // if click is delete
         deleteTodo(event.target.parentElement.getAttribute('data-key'));  // (get id from data-key attributes value                   
     }                                                                     // of parent <li> where the delte-button 
 });

//  ADD MEMORY RETIRO
 let todos4 = [];   // array for ToDo's

 // event listener for form 
 todoForm4.addEventListener('submit', function(event) {
     event.preventDefault();     //prevent page from reloading when submitting form
     addTodo(todoInput4.value);   // call addTodo function with input box value
 });

 // add ToDo function 
 function addTodo(item) {
     if (item !== '') {          // if input is not empty
         const todo = {          // takes input and creates object(JSON syntax!)
             id: Date.now(),
             name: item, 
             completed: false
     };
         todos4.push(todo);           //add item to array
         addToLocalStorage(todos4)    // stores and then run the render function 
         todoInput4.value = '';       // clears text box
     }
 };

 function renderTodos(todos4) {               // renders to the <ul> takes the array as arguments
     todoItemsList4.innerHTML = '';           // clears the <ul> 
     todos4.forEach(function(item) {          // loops through array   
         const checked = item.completed ? 'checked' : null;      // checks if item is completed
         const li = document.createElement('li');                // create <li>
         li.setAttribute('class', 'item');                       // set li class "item"
         li.setAttribute('data-key', item.id);                 // set data-key to item id
         if (item.completed === true) {                          // line through completed
             li.classList.add('checked');
         }                                                       // assign text to <li>
         li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>  
         ${item.name}
         <button class="delete-button">X</button>`;
         todoItemsList4.append(li);                               // assign <li> to <ul>
     });
 }    

 function addToLocalStorage(todos4) {                             // add to localStorage w/ arrays as arguments
     localStorage.setItem('todos4', JSON.stringify(todos4));       // convert array to JSON string (key = 'todos'/value=array)
     renderTodos(todos4);                                         // runs entire render function after saving to localStorage to show changes
 }

 function getFromLocalStorage() {                                // function to get storage
     const reference = localStorage.getItem('todos4');            // variable for items
     if (reference) {                                            // if exists
         todos4 = JSON.parse(reference);                          // array = parse the storage
         renderTodos(todos4);                                     // run the render function to show them
     } 
 }

 function toggle(id) {                                       // toggle to complete or not complete  
     todos4.forEach(function(item) {                          // loop takes each item as argument  
         if (item.id == id) {                                // if item id matches
             item.completed = !item.completed;               // item.completed = false
         }                                                   // us == not === cause of different types
     })
     addToLocalStorage(todos4);                           // update list function
 }

 function deleteTodo(id) {                                   // delete a todo
     todos4 = todos4.filter(function(item) {                   // filter() array, takes each item as argument
         return item.id != id;                               // filters out <li> with id and updates array
     });                                                     // return item.id == false ... makes new array of item.id false
         addToLocalStorage(todos4)                            // update list function
 }

 getFromLocalStorage();                                              // initialize function to get storage and show 

 todoItemsList4.addEventListener('click', function(event) {           // function listen to delete and check 'clicks'
     if (event.target.type === 'checkbox') {                                          // if click is checkbox 
         toggle(event.target.parentElement.getAttribute('data-key'));                 // toggle the state
     }
     if (event.target.classList.contains('delete-button')) {                          // if click is delete
         deleteTodo(event.target.parentElement.getAttribute('data-key'));  // (get id from data-key attributes value                   
     }                                                                     // of parent <li> where the delte-button 
 });

//  ADD MEMORY EL CIELO
 let todos5 = [];   // array for ToDo's

 // event listener for form 
 todoForm5.addEventListener('submit', function(event) {
     event.preventDefault();     //prevent page from reloading when submitting form
     addTodo(todoInput5.value);   // call addTodo function with input box value
 });

 // add ToDo function 
 function addTodo(item) {
     if (item !== '') {          // if input is not empty
         const todo = {          // takes input and creates object(JSON syntax!)
             id: Date.now(),
             name: item, 
             completed: false
     };
         todos5.push(todo);           //add item to array
         addToLocalStorage(todos5)    // stores and then run the render function 
         todoInput5.value = '';       // clears text box
     }
 };

 function renderTodos(todos5) {               // renders to the <ul> takes the array as arguments
     todoItemsList5.innerHTML = '';           // clears the <ul> 
     todos5.forEach(function(item) {          // loops through array   
         const checked = item.completed ? 'checked' : null;      // checks if item is completed
         const li = document.createElement('li');                // create <li>
         li.setAttribute('class', 'item');                       // set li class "item"
         li.setAttribute('data-key', item.id);                 // set data-key to item id
         if (item.completed === true) {                          // line through completed
             li.classList.add('checked');
         }                                                       // assign text to <li>
         li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}>  
         ${item.name}
         <button class="delete-button">X</button>`;
         todoItemsList5.append(li);                               // assign <li> to <ul>
     });
 }    

 function addToLocalStorage(todos5) {                             // add to localStorage w/ arrays as arguments
     localStorage.setItem('todos5', JSON.stringify(todos5));       // convert array to JSON string (key = 'todos'/value=array)
     renderTodos(todos5);                                         // runs entire render function after saving to localStorage to show changes
 }

 function getFromLocalStorage() {                                // function to get storage
     const reference = localStorage.getItem('todos5');            // variable for items
     if (reference) {                                            // if exists
         todos5 = JSON.parse(reference);                          // array = parse the storage
         renderTodos(todos5);                                     // run the render function to show them
     } 
 }

 function toggle(id) {                                       // toggle to complete or not complete  
     todos5.forEach(function(item) {                          // loop takes each item as argument  
         if (item.id == id) {                                // if item id matches
             item.completed = !item.completed;               // item.completed = false
         }                                                   // us == not === cause of different types
     })
     addToLocalStorage(todos5);                           // update list function
 }

 function deleteTodo(id) {                                   // delete a todo
     todos5 = todos5.filter(function(item) {                   // filter() array, takes each item as argument
         return item.id != id;                               // filters out <li> with id and updates array
     });                                                     // return item.id == false ... makes new array of item.id false
         addToLocalStorage(todos5)                            // update list function
 }

 getFromLocalStorage();                                              // initialize function to get storage and show 

 todoItemsList5.addEventListener('click', function(event) {           // function listen to delete and check 'clicks'
     if (event.target.type === 'checkbox') {                                          // if click is checkbox 
         toggle(event.target.parentElement.getAttribute('data-key'));                 // toggle the state
     }
     if (event.target.classList.contains('delete-button')) {                          // if click is delete
         deleteTodo(event.target.parentElement.getAttribute('data-key'));  // (get id from data-key attributes value                   
     }                                                                     // of parent <li> where the delte-button 
 });
