const tripDetails = {
    "Dec 23, 2024": "Niagara Falls - Dec 23 (night), Dec 24 (return)",
    "Dec 24, 2024": "Itcha",
    "Dec 25, 2024": "Church",
    "Dec 26, 2024": "Albany-Phila - night",
    "Dec 27, 2024": "Phila-Boston / New Haven - night",
    "Dec 28, 2024": "Boston-Albany",
    "Dec 29, 2024": "Albany (rest)",
    "Dec 30, 2024": "Albany-New York - 3 nights",
    "Dec 31, 2024": "New York",
    "Jan 1, 2025":  "New York",
    "Jan 2, 2025":  "Return"
};

document.getElementById('checkButton').addEventListener('click', function() {
    const dateInput = document.getElementById('dateInput').value;
    const tripInfo = tripDetails[dateInput] || "No trip planned on this date.";
    document.getElementById('tripInfo').textContent = tripInfo;
});
