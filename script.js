const btn = document.getElementById("btn");
const emojiName = document.getElementById("name");

addEventListener("contextmenu" , (e)=>{
    e.preventDefault();
}) ;


const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=01601f449abdb353ef2a063a4733f48dedb891c5");

    data = await response.json();


    for (let i = 0; i < 1200; i++) {
        emoji.push({
            emojiNam: data[i].character,
            emojiCode: data[i].unicodeName,
            category: data[i].group
        });
    }
}

getEmoji();



//01601f449abdb353ef2a063a4733f48dedb891c5
btn.addEventListener("click", () => {
    let randomNum = ((Math.random() * (emoji.length - 1))).toFixed(0);
    btn.innerText = emoji[randomNum].emojiNam;
    emojiName.innerText = emoji[randomNum].emojiCode;
});

