// Fetch and display IPs from source/data/ips.json

const ipTable = document.getElementById("ip-table");

fetch("source/data/ips.json")
.then(obj => obj.json())
.then(data => {
    console.log(data);
    data.forEach(item => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td><code class="ip rainbow-shadow" onclick="select(this)">${item.address}</code></td>
            <td>${item.desc}</td>
        `;
        ipTable.appendChild(tr);
    });
})
.catch(err => console.error("Failed to load IPs:", err));