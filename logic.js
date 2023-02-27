
var ischanging = false;

const russian = [
    'Меня зовут Сэм и в некоторых кругах меня знают как “Микан”.',

    "Я программист, разработчик игр и модов к ним. В данный момент студент по направлению \" Информационные системы и програмирование\" но я занимаюсь саморазвитием, поэтому есть опыт в разных сферах.",

    "В основном работаю на языке программирования \"Python\". Создаю решения на Tkinter, PyGame, Kivy, Django. Был опыт в создании ботов VK и Telegram.",

    "Могу выделить игровой движок для создания визуальных новелл\"Ren’Py\", на котором я разрабатываю новеллы с уникальным интерфейсом и даже игры в жанре “Квест”. " +
    "Так же принимал участие в разработке различных модов для игры “Бесконечное Лето”, где более 48 тысяч пользователей.",

    "Далее использую популярный игровой движок \"Unity\" и C# где создавались небольшие проекты, такие как настольные онлайн игры.",

    "Помимо этого есть незначительный опыт с такими языками как фреймворками и технологиями как C++, Java, Web, 1C, SQL, WebSocket, SocketIO. Я открыт для изучения и внедрения других программ что пополнит мой опыт."
]

const english = [
    'My name is Sam, in some communities I am known as ' +
    'Mikan.',

    "I am a programmer as well as a developer of games \
including modes to them. In addition to being a student \
with a major in Information Systems and Programming, I \
go in for self-development and constantly enhance my \
skills, so I have experience in various fields.",

    "Basically, I use Python as a language of programming. I \
create solutions in Tkinter, PyGame, Kivy, and Django. I \
also have experience in creating VK and Telegram bots.",

    "I would like to highlight the game engine Ren’Py that I use \
for creating and developing visual novels with unique \
    interfaces and even games in the genre Quest. \
    I also took part in the development of various modes for \
    the game \"Endless Summer\", which has more than 48 \
thousand users.",

    "Further, I use the popular game engine Unity and C#, \
where small projects were created, such as online board \
games.",

    "In addition, I have some experience working with \
languages, frameworks and technologies such as C++, Java, Web, 1C, SQL, WebSocket, and SocketIO. I am \
open to learning and implementing other programs to add \
to my experience."
]




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeTitle() {
  await animate("Mikan_Development_Studio", document.getElementById("mikanTitle"));
  await sleep(9000);
  await animate("Mikan_DS", document.getElementById("mikanTitle"));
  await sleep(9000);
  await animate("Mikan", document.getElementById("mikanTitle"));
  await sleep(9000);
  await animate("Mikansei", document.getElementById("mikanTitle"));
  setTimeout(changeTitle, 9000);
}

async function changePreview(){
    targetimage = document.getElementById("previewimage");

    while (true){
        await sleep(4000);
        targetimage.src = "./images/previews/es25.png";
        await sleep(4000);
        targetimage.src = "./images/previews/yoypy.png";
        await sleep(4000);
        targetimage.src = "./images/previews/tetris.png";
        await sleep(4000);
        targetimage.src = "./images/previews/esmg.png";
        await sleep(4000);
        targetimage.src = "./images/previews/Timo.png";
        await sleep(4000);
        targetimage.src = "./images/previews/gow.png";

    }

}


async function animate(fulltext, targetElement, speed=20){
	targetElement.innerHTML = "";
	for (let letter in fulltext){
        if (letter > 0 && fulltext[letter-1] === " "){
            targetElement.innerHTML = targetElement.innerText+" "+fulltext[letter];
        }
        else {
            targetElement.innerHTML = targetElement.innerText+fulltext[letter];

        }
		await sleep(speed);
	}

}

// setTimeout(function () {
//     altext = document.getElementsByTagName("p");
//     for (let i=0; i<altext.length;i++){
//         animate(altext[i].innerText, altext[i], Math.random()*5);
//
//     }
//
// }, 10)


function changeLanguage(language){



    if (ischanging){
        return
    }

    ischanging=true;

    let maxwait, cps;
    maxwait = 0;
    altext = document.getElementsByTagName("p");
    for (let i=0; i<altext.length;i++){
        cps = Math.random()*5;
        if (maxwait<language[i].length*cps+1000){
            maxwait=language[i].length*cps+1000;
        }
        animate(language[i], altext[i], cps);

    }
    setTimeout(function () {
        ischanging=false;
    }, maxwait)

}

function setRussian(){
    document.getElementById("findmehere").innerHTML = "Найти меня можно здесь:";
    changeLanguage(russian)
}
function setEnglish(){
    document.getElementById("findmehere").innerHTML = "You can find me here:";

    changeLanguage(english)

}

setTimeout(changePreview, 10);
setTimeout(changeTitle, 10);
setTimeout(setRussian, 10)


