const fs = require('fs');
const path = require('path');

// Function to decode y value from the given base
function decodeYValue(base, value) {
    const baseValue = parseInt(base, 10);
    let decodedValue = 0;
    let multiplier = 1;

    for (let i = value.length - 1; i >= 0; --i) {
        let digit = parseInt(value[i], baseValue);
        if (isNaN(digit)) {
            console.error(`Invalid digit '${value[i]}' for base ${baseValue}.`);
            return null;
        }
        decodedValue += digit * multiplier;
        multiplier *= baseValue;
    }

    return decodedValue;
}

// Function to read and process JSON files
function processJSONFiles(file1, file2) {
    console.log('Starting to process JSON files...');
    try {
        const rawData1 = fs.readFileSync(file1, 'utf8');
        const rawData2 = fs.readFileSync(file2, 'utf8');

        // Log raw data for troubleshooting
        console.log('Raw data from test_case_1.json:', rawData1);
        console.log('Raw data from test_case_2.json:', rawData2);

        const data1 = JSON.parse(rawData1);
        const data2 = JSON.parse(rawData2);

        console.log('Data from test_case_1.json:', data1);
        console.log('Data from test_case_2.json:', data2);

        // Process first JSON data
        const roots1 = [];
        for (const key in data1) {
            if (key !== 'keys') {
                const x = parseInt(key, 10);
                const y = decodeYValue(data1[key].base, data1[key].value);
                if (y !== null) {
                    roots1.push({ x, y });
                }
            }
        }

        // Process second JSON data
        const roots2 = [];
        for (const key in data2) {
            if (key !== 'keys') {
                const x = parseInt(key, 10);
                const y = decodeYValue(data2[key].base, data2[key].value);
                if (y !== null) {
                    roots2.push({ x, y });
                }
            }
        }

        // Output the results
        console.log('Roots from test_case_1.json:', roots1);
        console.log('Roots from test_case_2.json:', roots2);

    } catch (err) {
        console.error('Error reading or parsing JSON files:', err.message);
        if (err.code === 'ENOENT') {
            console.error('One of the files does not exist. Please check the file paths.');
        } else if (err instanceof SyntaxError) {
            console.error('There is a syntax error in the JSON file. Please check its format.');
        }
    }
}

// Define file paths
const filePath1 = path.join(__dirname, 'test_case_1.json');
const filePath2 = path.join(__dirname, 'test_case_2.json');

// Call the function with the specified file paths
processJSONFiles(filePath1, filePath2);
