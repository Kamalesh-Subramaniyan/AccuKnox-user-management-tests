# AccuKnox User Management Tests

## Overview

This project contains Playwright automation scripts for the OrangeHRM User Management module using JavaScript and the Page Object Model (POM) design pattern.

The framework automates the complete user lifecycle including user creation, search, update, validation, deletion, and deletion verification.

### Application Under Test

**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

**Credentials**

* Username: Admin
* Password: admin123

---

## Technology Stack

* Playwright 1.61.0
* JavaScript
* Node.js
* Page Object Model (POM)

---

## Automated Test Scenarios

The following scenarios are automated:

1. Login to OrangeHRM
2. Create Employee
3. Create User
4. Search User
5. Edit User Details
6. Validate Updated Details
7. Delete User
8. Verify User Deletion

---

## Project Structure

```text
AccuKnox-user-management-tests
│
├── pages
├── tests
├── scripts
├── test-data
├── docs
├── screenshots
├── playwright.config.js
├── package.json
└── README.md
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/Kamalesh-Subramaniyan/AccuKnox-user-management-tests.git
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test --workers=1
```

Run in headed mode:

```bash
npx playwright test --headed --workers=1
```

---

## Manual Test Cases

Manual test cases are available in:

```text
docs/AccuKnox_Manual_Test_Cases.xlsx
```

---

## Problem Statement 2

### 1. System Health Monitoring Script

Python script that monitors:

* CPU Usage
* Memory Usage
* Disk Usage

The script compares system resource usage against predefined threshold values and generates alerts when limits are exceeded.

Run:

```bash
python scripts/system_health_monitor.py
```

### 2. Application Health Checker

Python script that verifies application availability using HTTP status codes.

Features:

* Sends HTTP GET request
* Checks response status code
* Reports application status as UP or DOWN
* Handles connection errors and timeouts

Run:

```bash
python scripts/application_health_checker.py
```

---

## Screenshots

Execution screenshots are available in:

```text
screenshots/all-tests-passed.png
screenshots/problem_2.png
```

---

## Notes

* OrangeHRM is a shared public demo environment.
* User creation may fail if the username already exists.
* In such cases, update the username in `test-data/userData.js` and rerun the tests.
* Sequential execution (`--workers=1`) is recommended because the test cases are dependent on one another.
* Occasional delays in autocomplete suggestions or response times may occur due to demo environment instability.
