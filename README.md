# Catalog Assignment - JSON File Processing

This project reads and processes data from two JSON files, `test_case_1.json` and `test_case_2.json`, which contain values in different numerical bases. The script decodes each value to base-10 and outputs the results.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)

## Project Structure

- `catalog.js`: Main script to read, decode, and process data from JSON files.
- `test_case_1.json` and `test_case_2.json`: JSON files with data to be processed.

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-github-repo-link>
   cd CATALOG_ASSIGNMENT/catalog
Expected Output:
Starting to process JSON files...
Raw data from test_case_1.json: { ... }
Raw data from test_case_2.json: { ... }
Roots from test_case_1.json: [ { x: 1, y: 4 }, { x: 2, y: 7 }, { x: 3, y: 12 }, { x: 6, y: 39 } ]
Roots from test_case_2.json: [ { x: 1, y: 995085094601491 }, { x: 2, y: 21394886326566396 }, ... ]
