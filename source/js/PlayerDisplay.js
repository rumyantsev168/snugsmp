class PlayerDisplay extends HTMLElement {
    constructor() {
        super();
    }

    // Observe attribute changes
    static get observedAttributes() {
        return ["user", "tooltip"]; // Add tooltip to observed attributes
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "user" || name === "tooltip") { // Re-render if user or tooltip changes
            this.render();
        }
    }

    render() {
        const username = this.getAttribute("user");
        const tooltip = this.getAttribute("tooltip");

        if (!username) {
            console.error("No 'user' attribute found!");
            return;
        }

        // Clear previous content
        this.innerHTML = "";

        const display = document.createElement("div");
        display.className = "player-display";

        // Set tooltip as title attribute if provided
        if (tooltip) {
            display.title = tooltip;
        }

        const skinImg = document.createElement("img");
        skinImg.src = `source/${username}_avatar_drops.png`;
        skinImg.width = 200;
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