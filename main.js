// Handle Lost Item Submission
document.getElementById("lostItemForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let item = {
        name: document.getElementById("itemName").value,
        location: document.getElementById("itemLocation").value,
        description: document.getElementById("itemDescription").value,
        contact: document.getElementById("contactInfo").value,
        status: "lost",
        id: Date.now()
    };

    let lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    lostItems.push(item);
    localStorage.setItem("lostItems", JSON.stringify(lostItems));

    alert("Lost item reported successfully!");
    window.location.href = "index.html"; 
});

// Handle Found Item Submission
document.getElementById("foundItemForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let item = {
        name: document.getElementById("foundItemName").value,
        location: document.getElementById("foundItemLocation").value,
        description: document.getElementById("foundItemDescription").value,
        contact: document.getElementById("foundContactInfo").value,
        status: "found",
        id: Date.now()
    };

    let foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];
    foundItems.push(item);
    localStorage.setItem("foundItems", JSON.stringify(foundItems));

    alert("Found item reported successfully!");
    window.location.href = "index.html"; 
});

// Display Lost & Found Reports
function displayReports() {
    let reports = JSON.parse(localStorage.getItem("lostItems")) || [];
    let reportList = document.getElementById("reportList");

    if (!reportList) return;

    reportList.innerHTML = "";
    reports.slice(-5).forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${item.name}</strong> - ${item.location} <br> <small>${item.description}</small> <br>
        <button onclick="claimItem(${item.id})">Claim</button>`;
        reportList.appendChild(li);
    });
}

// Search Lost Items
function searchItems() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let reports = JSON.parse(localStorage.getItem("lostItems")) || [];
    let filtered = reports.filter(item => item.name.toLowerCase().includes(query));

    let reportList = document.getElementById("reportList");
    reportList.innerHTML = "";

    filtered.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${item.name}</strong> - ${item.location} <br> <small>${item.description}</small>`;
        reportList.appendChild(li);
    });
}

// Claim an Item
function claimItem(id) {
    alert("You have claimed this item. Contact the owner for details.");
}

document.addEventListener("DOMContentLoaded", displayReports);