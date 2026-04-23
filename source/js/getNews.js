// Fetch and display the latest announcement from source/data/latestAnnouncement.md

const latestAnnouncement = document.getElementById("latest-announcement-content");

fetch("source/data/latestAnnouncement.md")
.then(obj => obj.text())
.then(data => {
    latestAnnouncement.innerHTML = marked.parse(data);
})
.catch(err => console.error("Failed to load latest news:", err));