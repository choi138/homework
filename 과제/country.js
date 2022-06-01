const country = document.querySelector("#country-form"); 
const countryInput = country.querySelector(".country-input"); 
const countryList = document.querySelector(".country-list")

let countrys = []; 
const COUNTRY = "country";

function saveCountry(){
    localStorage.setItem("COUNTRY", JSON.stringify(countrys));// JSON.stringify를 써서 countrys를 숫자열로 바꾼다.
}

function CountrySubmit(event){
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

country.addEventListener("submit", CountrySubmit);

function paintCountry(newTodo){ // paintCountry라는 함수를 만들고 함수안에 newTodo인수를 넣는다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // newTodo.text는 객체의 프로퍼티이다.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletCountry);
    li.appendChild(span);
    li.appendChild(button);
    countryList.appendChild(li);
    if(span.innerText === "한국" || span.innerText === "korea" || span.innerText === "Korea")
        setInterval(()=>{
            span.innerText = "Korea" + "🇰🇷 " + Korea()
        }, 1000)
    else if(span.innerText === "일본" || span.innerText === "japan" || span.innerText === "Japan"){
        setInterval(()=>{
            span.innerText = "Japan" + "🇯🇵 " + Japan()
        }, 1000)
    }
    else if(span.innerText === "중국" || span.innerText === "china" || span.innerText === "China"){
        setInterval(()=>{
            span.innerText = "China" + "🇨🇳 " + china()
        }, 1000)
    }
    else if(span.innerText === "뉴욕" || span.innerText === "new york" || span.innerText === "New York"){
        setInterval(()=>{
            span.innerText = "New York" + "🇺🇸 " + New_York()
        }, 1000)
    }
}

function deletCountry(event){
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

function Japan(){
    return new Date().toLocaleTimeString
    ('en-US', { timeZone: 'Asia/Tokyo' });
}

// 도쿄

function Korea(){
    return new Date().toLocaleTimeString
    ('en-US', { timeZone: 'Asia/Seoul' });
}

// 한국

function New_York() {
    return new Date().toLocaleTimeString
    ('en-US', { timeZone: 'America/New_York' });
}

// 뉴욕


