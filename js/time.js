function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date}, ${time}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.task-btn');

    for (const button of buttons) {
        button.addEventListener('click', function() {
            const taskDiv = this.closest('.task-div');
            const taskName = taskDiv.querySelector('h1').innerText;

            if (this.innerText === "Completed") {
                const currentDateTime = getCurrentDateTime();

                const activityLog = document.getElementById('activity-log');
                const newLog = document.createElement('div');
                newLog.classList.add('p-2', 'bg-gray-100', 'rounded-lg', 'mb-4');
                newLog.innerHTML = `<p>You have completed the task: ${taskName} at ${currentDateTime}!</p>`;
                
                const hr = activityLog.querySelector('hr');
                if (hr) {
                    activityLog.insertBefore(newLog, hr.nextSibling);
                } else {
                    activityLog.appendChild(newLog);
                }

                let taskCount = document.getElementById("task-count");
                let currentTaskCount = parseInt(taskCount.innerText);
                if (currentTaskCount > 0) {
                    taskCount.innerText = currentTaskCount - 1;
                }

                let completedCount = document.getElementById("completed-count");
                let currentCompletedCount = parseInt(completedCount.innerText);
                completedCount.innerText = currentCompletedCount + 1;

                this.disabled = true;
                this.classList.add("bg-gray-400", "rounded-lg");

                taskDiv.classList.add('opacity-50');
            }
        });
    }
});

























// day



function updateDay() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()];

    let dayElement = document.getElementById('day');
    if (!dayElement) {
        dayElement = document.createElement('div');
        dayElement.id = 'day';
        dayElement.style.fontSize = '24px';
        dayElement.style.fontWeight = 'bold';
        dayElement.style.textAlign = 'center';
        dayElement.style.padding = '10px';
        dayElement.style.backgroundColor = '#f0f9ff';
        document.body.appendChild(dayElement);
    }

    dayElement.innerText = day;
}

updateDay();
setInterval(updateDay, 1000);

// date

function updateDate() {
    const now = new Date();
    const date = now.toLocaleDateString();

    let dateElement = document.getElementById('date');
    if (!dateElement) {
        dateElement = document.createElement('div');
        dateElement.id = 'date';
        dateElement.style.fontSize = '24px';
        dateElement.style.fontWeight = 'bold';
        dateElement.style.textAlign = 'center';
        dateElement.style.padding = '10px';
        dateElement.style.backgroundColor = '#f0f9ff';
        document.body.appendChild(dateElement);
    }

    dateElement.innerText = date;
}

updateDate();
setInterval(updateDate, 1000);
// 


