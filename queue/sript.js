let singleQueueNumber = 1;
let multipleQueueNumber = 1;
let priorityQueueNumber = 1;

function nextNumber(queueType) {
    if (queueType === 'single') {
        singleQueueNumber++;
        updateQueueNumber('single', singleQueueNumber);
    } else if (queueType === 'multiple') {
        multipleQueueNumber++;
        updateQueueNumber('multiple', multipleQueueNumber);
    } else if (queueType === 'priority') {
        priorityQueueNumber++;
        updateQueueNumber('priority', priorityQueueNumber);
    }
    window.print(); // Print the queue number
}

function updateQueueNumber(queueType, number) {
    document.getElementById(`${queueType}QueueNumber`).innerText = number;
}

// Initial update
updateQueueNumber('single', singleQueueNumber);
updateQueueNumber('multiple', multipleQueueNumber);
updateQueueNumber('priority', priorityQueueNumber);
