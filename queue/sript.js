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

  