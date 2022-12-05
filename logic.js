
var ischanging = false;

const russian = [
    'Меня зовут Сэм, но в некоторых кругах меня знают как “Микан”.',

    "Я программист и разработчик игр (и модов к ним). И хоть я все еще студент, \
        при помощи своего желания развиваться и улучшать свои навыки - имею опыт во многих сферах.",

    "Моим основным языком программирования является Python. \
        С помощью него я создавал решения на Tkinter, PyGame, Kivy, Django и многих других. \
        Был опыт в создании ботов VK, Telegram.",

    "Особенно хочется выделить Ren’Py, \
        игровом движке для создания визуальных новелл, \
        на котором я разрабатывал новеллы с уникальным интерфейсом и даже игры в жанре “Квест”. \
        Помимо этого принимал участие в разработке различных модов для игры “Бесконечное Лето”, \
        в общей сложности заинтересовав более 48 тысяч пользователей.",

    "Unity, как популярный игровой движок для разработки, так-же был мною использован. \
        С помощью его и C# создавались небольшие проекты, например настольные онлайн игры.",

    "Помимо этого так-же имел незначительный опыт с такими языками, \
        фреймворками и технологиями как: C++, Java, Web, 1C, SQL, WebSocket, \
        SocketIO и множество, множество другого, и еще больше будет дальше."
]

const english = [
    'My name is Sam, but someone know me as “Mikan”.',

    "I am a programmer and indie-developer of games (and also mods for some of other games). And although \
    I am still a student, aiming to develop and improve my skills - I tried myself in different areas.",

    "Python is my primary language. \
        By using Python I made many applications with different frameworks like Tkinter, PyGame, Kivy, Django and etc. \
        Also I had experience in creating VK and Telegram bots.",

    "I especially want to highlight Ren'Py," +
        'game engine for creating visual novels, \
        on which I developed novels with a unique interface and even games in the "Quest" genre. \
        In addition, I took part in the development of various mods for the game “Everlasting Summer”, \
        in total, having interested more than 48 thousand players.',

    "Unity, as a popular game engine for development, was also used by me. \
        Unity and C# were used to create small projects, for example online board games.",

    "In addition, I also had little experience with such languages,, \
        frameworks and technologies such as: C++, Java, Web, 1C, SQL, WebSocket, \
        SocketIO and many, many more, and more to come."
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
        if (2+1>5){
            return
        }
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

    changeLanguage(russian)
}
function setEnglish(){
    changeLanguage(english)

}

setTimeout(changePreview, 10);
setTimeout(changeTitle, 10);
setTimeout(setRussian, 10)


