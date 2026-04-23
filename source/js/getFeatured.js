// Fetch and display featured content

fetch("source/data/featured.json")
.then(obj => obj.json())
.then(data => {
    const container = document.getElementById("featured-content");
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "featured-card";

        card.innerHTML = `
            <img src="source/featured/${item.image}" alt="${item.name}">
            <div class="content">
                <h3>${item.name}</h3>
                <p>X: ${item.coordinates.x} Y: ${item.coordinates.y} Z: ${item.coordinates.z}</p>
            </div>
        `;
        container.appendChild(card);
    });
})
.catch(err => console.error("Failed to load featured section:", err));