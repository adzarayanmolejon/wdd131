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

function playAudio(queueType) {
    const audioElement = document.getElementById(`${queueType}Audio`);
    audioElement.play();
}
function nextNumber(queueType) {
    console.log('Next button clicked for queue type:', queueType);
    // Your code here
}
function nextNumber(queueType) {
    let newQueueNumber = 0;
    newQueueNumber++;
    console.log('New queue number for', queueType, 'is:', newQueueNumber);
    // Your code here
}
function nextNumber(queueType) {
    if (queueType === 'single') {
        console.log('Incrementing single queue number');
    } else {
        console.log('Incrementing', queueType, 'queue number');
    }
    // Your code here
}
function nextNumber(queueType) {
    let queue = { type: queueType, number: 1 };
    console.log('Current queue:', queue);
    // Your code here
}
let singleQueueNumber = 1;
let multipleQueueNumber = 1;
let priorityQueueNumber = 1;

function nextNumber(queueType) {
    let newNumber;
    switch (queueType) {
        case 'single':
            newNumber = singleQueueNumber;
            singleQueueNumber++;
            document.getElementById('singleQueueNumber').innerHTML = newNumber;
            break;
        case 'multiple':
            newNumber = multipleQueueNumber;
            multipleQueueNumber++;
            document.getElementById('multipleQueueNumber').innerHTML = newNumber;
            break;
        case 'priority':
            newNumber = priorityQueueNumber;
            priorityQueueNumber++;
            document.getElementById('priorityQueueNumber').innerHTML = newNumber;
            break;
        default:
            console.error('Invalid queue type');
            return;
    }
    return newNumber;
}

// Example usage
// nextNumber('single');
// nextNumber('multiple');
// nextNumber('priority');
