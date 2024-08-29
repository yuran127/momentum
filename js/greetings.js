const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'; // 'hidden' 클래스를 저장
const USERNAME_KEY = 'username'; // 본인이 생성한 string을 반복하여 사용하고 싶을때 대문자 변수로 설정해주는것이 좋다.

function onLoginSubmit(event) {
    event.preventDefault(); // 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); // HIDDEN_CLASSNAME 변수를 사용, hidden 이라는 클래스 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // (저장될 아이템 이름, 값(변수))
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}
