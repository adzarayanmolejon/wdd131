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
let printedNumbers = {
    single: [],
    multiple: [],
    priority: []
};

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
            printedNumbers.single.push(queueNumber);
            break;
        case 'multiple':
            queueNumber = multipleQueueNumber - 1; // Print the last generated number
            printedNumbers.multiple.push(queueNumber);
            break;
        case 'priority':
            queueNumber = priorityQueueNumber - 1; // Print the last generated number
            printedNumbers.priority.push(queueNumber);
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

function callNumber(queueType) {
    let queueNumbers = printedNumbers[queueType];
    if (queueNumbers.length > 0) {
        let nextNumber = queueNumbers.shift();
        alert(`Calling ${queueType} queue number: ${nextNumber}`);
    } else {
        alert(`No more numbers to call for ${queueType} queue`);
    }
}
