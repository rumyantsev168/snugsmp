// Ping the Java IP and get status, player count and player list

const statusSpan = document.getElementById("status");
const playerCountSpan = document.getElementById("player-count");
const playerlistDiv = document.getElementById("player-list");

fetch(`https://api.mcsrvstat.us/3/play.snugsmp.com`)
.then(obj => obj.json())
.then(data => {
    console.log(data);
    if (data.online) {
        statusSpan.style.color = "#00AA00";
        statusSpan.style.textShadow = "0px 0px 10px #00AA0060";
        statusSpan.innerHTML = "online";
    } else {
        statusSpan.style.color = "#AA0000";
        statusSpan.style.textShadow = "0px 0px 10px #00AA0060";
        statusSpan.innerHTML = "offline";
    };
    playerCountSpan.innerText = `${data.players.online}/${data.players.max}`;
    data.players.list.forEach(player => {
        playerlistDiv.innerHTML += `<img src="https://identicraft.js.org/avatar/${player.uuid}/32.png" width="32" title="${player.name}">`;
    });
})
.catch(err => console.error("Failed to get server ping:", err));