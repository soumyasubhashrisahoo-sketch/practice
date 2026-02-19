

const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// Sample Data
let sampleEvent = [
    {
        title: "Web Dev Workshop",
        date: "2026-04-06",
        category: "Workshop",
        description: "Introduction to web development"
    },
    {
        title: "Tech Conference",
        date: "2026-04-07",
        category: "Conference",
        description: "Annual tech meet"
    }
];


function createEventCard(eventData) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    return card;
}


function addEvent(eventData) {

    const emptyState = document.querySelector(".empty-state");
    if (emptyState) {
        emptyState.remove();
    }

    eventContainer.appendChild(createEventCard(eventData));
}


eventForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
});


eventContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        const card = event.target.closest(".event-card");
        card.remove();

        if (!eventContainer.querySelector(".event-card")) {
            eventContainer.innerHTML =
                `<div class="empty-state">No events yet. Add your first event!</div>`;
        }
    }
});


addSampleBtn.addEventListener("click", function () {
    sampleEvent.forEach(addEvent);
});


clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML =
        `<div class="empty-state">No events yet. Add your first event!</div>`;
});


const demoContent = document.getElementById("demoContent");

document.addEventListener("keydown", function (event) {
    demoContent.innerText = "You pressed: " + event.key;
});


