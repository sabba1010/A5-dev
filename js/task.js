




const buttons = document.querySelectorAll('.task-btn');

for (const button of buttons) {
    button.addEventListener('click', function() {
        const taskDiv = this.closest('.task-div');
        const taskName = this.closest('.task-div').querySelector('h1').innerText;  
        const alertResponse = confirm(`Are you sure you want to complete "${taskName}"?`);

        if (alertResponse === true && this.innerText !== "Completed") {  
            const taskDescription = taskDiv.querySelector('p').innerText;
            
            
            const completionMessage = document.createElement('p');
            completionMessage.classList.add('text-green-500', 'font-semibold', 'mt-4');
            completionMessage.innerText = `"${taskName}" task has been completed!`;

            taskDiv.appendChild(completionMessage);  

           
            const activityLog = document.getElementById('activity-log');
            const newLog = document.createElement('div');
            newLog.classList.add('p-2', 'bg-gray-100', 'rounded-lg', 'mb-4');
            newLog.innerHTML = `<p>${taskDescription} task completed!</p>`;

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
            this.innerText = "Completed"; 
        }
    });
}

document.getElementById('clear-history').addEventListener('click', () => {
    document.getElementById('activity-log').innerHTML = '';
});














