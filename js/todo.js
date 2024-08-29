const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span); // li의 자식은 span이다
    li.appendChild(button); // li의 자식은 button이다
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // 새로운 할 일을 배열에 추가
    paintToDo(newTodoObj);
    saveToDos(); // 배열을 localStorage에 저장
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //forEach는 painToDo를 기본적으로 실행
}

function sexyFilter() {}

[1, 2, 3, 4].filter(sexyFilter);

sexyFilter(4);
