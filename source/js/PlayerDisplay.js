class PlayerDisplay extends HTMLElement {
    constructor() {
        super();
    }

    // Observe attribute changes
    static get observedAttributes() {
        return ["user"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "user" && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const username = this.getAttribute("user");
        if (!username) {
            console.error("No 'user' attribute found!");
            return;
        }

        // Clear previous content
        this.innerHTML = "";

        const display = document.createElement("div");
        display.className = "player-display";

        const skinImg = document.createElement("img");
        skinImg.src = `https://mc-heads.net/body/${username}/right`;
        skinImg.width = 100;
        skinImg.alt = `${username}'s Minecraft skin`;
        skinImg.onerror = () => {
            skinImg.style.display = "none";
            console.warn(`Failed to load skin for user: ${username}`);
        };

        const usernameLabel = document.createElement("b");
        usernameLabel.className = "rainbow-shadow";
        usernameLabel.innerText = username;

        display.appendChild(skinImg);
        display.appendChild(usernameLabel);
        this.appendChild(display);
    }
}

customElements.define("player-display", PlayerDisplay);