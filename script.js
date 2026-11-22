// ========================================
// 1. WELCOME MESSAGE
// ========================================


function welcomeMessage() {
    let name = prompt("Enter your name:");

    if (name === null || name === "") {
        alert("Welcome to VirtualEvents!");
    } else {
        document.getElementById("welcome-message").innerHTML =
            "Welcome to VirtualEvents, " + name + "!";
    }
}


// ========================================
// 2. EVENT SEARCH
// ========================================

function searchEvents() {

    let searchName = document.getElementById("searchInput").value;
    let categories = document.getElementsByClassName("category-list")[0];
    let items = categories.getElementsByTagName("li");
    let found = false;

    searchName = searchName.toLowerCase();

    for (let i = 0; i < items.length; i++) {

        let eventName = items[i].innerHTML.toLowerCase();

        if (eventName.indexOf(searchName) !== -1 && searchName !== "") {
            found = true;
            break;
        }
    }

    if (searchName === "") {
        document.getElementById("searchResult").innerHTML =
            "Please enter an event name.";
    }
    else if (found === true) {
        document.getElementById("searchResult").innerHTML =
            "Event found! You can explore this category.";
    }
    else {
        document.getElementById("searchResult").innerHTML =
            "Sorry! Event not found.";
    }
}


// ========================================
// 3. DARK MODE / LIGHT MODE
// ========================================

let darkMode = false;

function changeTheme() {

    if (darkMode === false) {

        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";

        darkMode = true;

        alert("Dark Mode Activated!");

    } else {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        darkMode = false;

        alert("Light Mode Activated!");
    }
}


// ========================================
// 4. EXPLORE EVENT DETAILS
// ========================================

function showEventDetails() {

    let eventName = prompt(
        "Enter event name:\nHTML\nPython\nAI\nCyber Security\nData Science"
    );

    if (eventName === null) {
        return;
    }

    switch (eventName) {

        case "HTML":
            alert("HTML Workshop:\nLearn HTML and website structure.");
            break;

        case "Python":
            alert("Python Workshop:\nLearn Python programming fundamentals.");
            break;

        case "AI":
            alert("AI Workshop:\nExplore Artificial Intelligence basics.");
            break;

        case "Cyber Security":
            alert("Cyber Security Workshop:\nLearn the basics of online security.");
            break;

        case "Data Science":
            alert("Data Science Workshop:\nExplore data analysis and data concepts.");
            break;

        default:
            alert("Event not found! Please enter the correct event name.");
    }
}


// ========================================
// 5. VIEW ALL EVENTS
// ========================================

function displayEvents() {

    let events = [
        "HTML Workshop",
        "Python Workshop",
        "Artificial Intelligence",
        "Cyber Security",
        "Data Science"
    ];

    let eventList = "";

    for (let i = 0; i < events.length; i++) {

        eventList = eventList + (i + 1) + ". " + events[i] + "\n";
    }

    alert("Available Events:\n\n" + eventList);
}


// ========================================
// 6. EVENT SCHEDULE
// ========================================

function showSchedule() {

    let schedule = 
        "Event Schedule:\n\n" +
        "HTML Workshop - 10 November - 2 Hours\n" +
        "Python Workshop - 12 November - 3 Hours\n" +
        "AI Workshop - 15 November - 2 Hours";

    alert(schedule);
}


// ========================================
// 7. REGISTRATION FORM VALIDATION
// ========================================

function validateForm() {

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;

    let modeGroup = document.getElementsByName("mode");
    let mode = "";

    let terms = document.getElementsByName("terms")[0];

    // Check name
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Check email
    else if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    // Check phone
    else if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    // Check phone length
    else if (phone.length !== 10) {
        alert("Please enter a 10-digit phone number.");
        return false;
    }

    // Check event selection
    else if (event === "") {
        alert("Please select an event.");
        return false;
    }

    // Check mode selection
    for (let i = 0; i < modeGroup.length; i++) {

        if (modeGroup[i].checked === true) {
            mode = modeGroup[i].value;
            break;
        }
    }

    if (mode === "") {
        alert("Please select Online or Offline mode.");
        return false;
    }

    // Check Terms and Conditions
    if (terms.checked === false) {
        alert("Please accept the Terms and Conditions.");
        return false;
    }

    // Confirmation popup
    let confirmation = confirm(
        "Are you sure you want to register for " + event + "?"
    );

    if (confirmation === false) {
        alert("Registration cancelled.");
        return false;
    }

    // Display registration summary
    document.getElementById("registration-summary").innerHTML =
        "<h2>Registration Successful!</h2>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Email:</b> " + email + "</p>" +
        "<p><b>Phone:</b> " + phone + "</p>" +
        "<p><b>Event:</b> " + event + "</p>" +
        "<p><b>Mode:</b> " + mode + "</p>";

    alert("Congratulations! Your registration is confirmed.");

    // Prevent page reload
    return false;
}
