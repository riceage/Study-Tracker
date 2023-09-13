// ...

// Define a function to fetch and populate the CSV data
// ...

// Define a function to fetch and populate the CSV data
function populateTable() {

    const tbody = document.getElementById('csv-data'); // Get the HTML table body element

    const results = []; // This array will hold the CSV data

    // Construct an absolute URL to the CSV file
    const csvUrl = `${window.location.origin}/Assets/other-assets/Bio_Spec.csv`;

    // Fetch the CSV file using the absolute URL
    fetch(csvUrl) // Use the Fetch API to request the CSV file
        .then((response) => response.text()) // Convert the response to text
        .then((csvText) => {
            // Parse the CSV data
            const rows = csvText.split('\n'); // Split the CSV text into rows
            const headers = rows[0].split(','); // Extract column headers from the first row

            for (let i = 1; i < rows.length; i++) {
                const row = rows[i].split(','); // Split the current row into columns
                const rowData = {}; // Create an object to hold the data for this row

                // Map each column to a property in the rowData object
                // Adjust the property names to match your new column titles
                rowData['Module'] = row[0];
                rowData['Sub-Module'] = row[1];
                rowData['Topic'] = row[2];
                rowData['Number'] = row[3];
                rowData['Spec-Point'] = row[4];
                rowData['Learning-Outcome'] = row[5];

                results.push(rowData); // Add the rowData object to the results array
            }

            // Populate the HTML table with the CSV data
            results.forEach((row) => {
                const newRow = document.createElement('tr'); // Create a new table row element
                newRow.innerHTML = `
                    <td>${row.Module}</td>
                    <td>${row['Sub-Module']}</td>
                    <td>${row.Topic}</td>
                    <td>${row.Number}</td>
                    <td>${row['Spec-Point']}</td>
                    <td>${row['Learning-Outcome']}</td>
                `; // Populate the row with data from the CSV
                tbody.appendChild(newRow); // Add the row to the table
            });
        })
        .catch((error) => {
            console.error('Error loading CSV file:', error);
        });
}

// Call the function to populate the table when the page loads
// JavaScript to update progress bars
// Function to change the fill amount of the circular progress bar

// Usage: Change the fill percentage to 50%


// Call the function to populate the table and update progress bars when the page loads
document.addEventListener('DOMContentLoaded', populateTable);

