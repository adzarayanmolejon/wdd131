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
let singleQueueNumber = 1;
let multipleQueueNumber = 1;
let priorityQueueNumber = 1;

// Rest of your JavaScript code using these variables (e.g., nextNumber function)
function nextNumber(queueType) {
  // ... (code using singleQueueNumber, multipleQueueNumber, priorityQueueNumber)
}

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
    
    // Play audio
    let audio = document.getElementById('audio');
    audio.play();

    return newNumber;
}

function printNumber(queueType) {
    let queueNumber;
    switch (queueType) {
        case 'single':
            queueNumber = singleQueueNumber - 1; // Print the last generated number
            break;
        case 'multiple':
            queueNumber = multipleQueueNumber - 1; // Print the last generated number
            break;
        case 'priority':
            queueNumber = priorityQueueNumber - 1; // Print the last generated number
            break;
        default:
            console.error('Invalid queue type');
            return;
    }
    
    // Print the queue number
    let printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`<h1>Queue Number: ${queueNumber}</h1>`);
    printWindow.document.close();
    printWindow.print();
}
