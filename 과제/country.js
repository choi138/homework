const country = document.querySelector("#country-form"); 
const countryInput = country.querySelector(".country-input"); 
const countryList = document.querySelector(".country-list")

let countrys = []; 
const COUNTRY = "country";

function saveCountry(){
    localStorage.setItem("COUNTRY", JSON.stringify(countrys));// JSON.stringify를 써서 countrys를 문자열로 바꾼다.
}

function countrySubmit(event){
    event.preventDefault()
    const newCountry = countryInput.value;
    countryInput.value = "";
    const newTodoCountry = { 
        text: newCountry,
        id: Date.now(),
    };
    countrys.push(newTodoCountry); 
    paintCountry(newTodoCountry);
    saveCountry();
}

country.addEventListener("submit", countrySubmit);

function paintCountry(newTodo){ // paintCountry라는 함수를 만들고 함수안에 newTodo인수를 넣는다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // newTodo.text는 객체의 프로퍼티이다.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteCountry);
    li.appendChild(span);
    li.appendChild(button);
    countryList.appendChild(li);
    let text = span.innerText.toLowerCase()
    switch(text){
        case "한국":
        case "korea":
            setInterval(()=>{
                span.innerText = "Korea" + "🇰🇷 " + korea()
            })
        break;

        case "일본":
        case "japan":
            setInterval(()=>{
                span.innerText = "Japan" + "🇯🇵 " + japan()
            })
        break;

        case "중국":
        case "china":
            setInterval(()=>{
                span.innerText = "China" + "🇨🇳 " + china()
            })
        break;

        case "뉴욕":
        case "new york":
            setInterval(()=>{
                span.innerText = "New York" + "🇺🇸 " + new_York()
            })
        break;

        default:
            span.innerText = "등록되지 않은 나라입니다."
    }
}

function deleteCountry(event){
    const li = event.target.parentNode;
    countrys = countrys.filter((toDo) => toDo.id !== parseInt(li.id))
    li.remove();
    saveCountry()
}

const saveCountrys = localStorage.getItem("COUNTRY");
if(saveCountrys){
    const parsedCountrys = JSON.parse(saveCountrys);
    countrys = parsedCountrys;
    parsedCountrys.forEach(parsedCountry => paintCountry(parsedCountry));
}



function china(){
    return new Date().toLocaleTimeString
    ('en-Us', { timeZone: 'Asia/Shanghai' });
}

// 중국

function japan(){
    return new Date().toLocaleTimeString
    ('en-US', { timeZone: 'Asia/Tokyo' });
}

// 도쿄

function korea(){
    return new Date().toLocaleTimeString
    ('en-US', { timeZone: 'Asia/Seoul' });
}

// 한국

function new_York() {
    return new Date().toLocaleTimeString
    ('en-US', { timeZone: 'America/New_York' });
}

// 뉴욕


