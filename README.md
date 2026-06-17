# AccuKnox User Management Tests

## Overview

This project automates the OrangeHRM User Management workflow using Playwright with JavaScript and the Page Object Model (POM) design pattern.

### Application Under Test

URL:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Credentials:

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

The framework automates the following scenarios:

1. Login to OrangeHRM
2. Navigate to Admin Module
3. Create Employee
4. Create User
5. Search User
6. Edit User Details
7. Validate Updated User Details
8. Delete User
9. Verify User Deletion

---

## Project Structure

```text
AccuKnox-user-management-tests
│
├── pages
│   ├── LoginPage.js
│   ├── AdminPage.js
│   └── PimPage.js
│
├── tests
│   ├── 01_login.spec.js
│   ├── 02_createEmployee.spec.js
│   ├── 03_createUser.spec.js
│   ├── 04_searchUser.spec.js
│   ├── 05_editUser.spec.js
│   ├── 06_deleteUser.spec.js
│   └── 07_verifyDelete.spec.js
│
├── test-data
│   └── userData.js
│
├── docs
│   └── AccuKnox_Manual_Test_Cases.xlsx
│
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

### Install Browsers

```bash
npx playwright install
```

---

## Execute Test Cases

Run all tests:

```bash
npx playwright test --workers=1
```

Run tests in headed mode:

```bash
npx playwright test --headed --workers=1
```

Run a specific test:

```bash
npx playwright test tests/03_createUser.spec.js
```

---

## Manual Test Cases

Manual test cases are available in:

```text
docs/AccuKnox_Manual_Test_Cases.xlsx
```

---

## Notes

* The OrangeHRM demo application is a shared public environment.
* User creation may fail if the username already exists in the system.
* If a duplicate username issue occurs, update the username value in `test-data/userData.js` and rerun the tests.
* Employee autocomplete suggestions may occasionally load slowly due to demo environment response times.
* Test execution is recommended using:

```bash
npx playwright test --workers=1
```

to ensure sequential execution of dependent scenarios.

---

## Known Limitations

Because the application under test is a public demo environment, test execution may occasionally be affected by:

* Existing usernames created by other users
* Delayed autocomplete suggestions
* Temporary application response delays
* Dynamic data changes by other users

These issues are related to the shared nature of the demo environment and not the automation framework.
## Problem Statement 2

### Objective 1: System Health Monitoring Script

A Python script was developed to monitor basic system health metrics and generate alerts when threshold values are exceeded.

#### Monitored Metrics
- CPU Usage
- Memory Usage
- Disk Usage

#### Features
- Displays current system resource utilization.
- Compares values against predefined thresholds.
- Prints alert messages when usage exceeds limits.

#### Run Command

```bash
python scripts/system_health_monitor.py
```

#### Sample Output

```text
===== System Health Check =====
CPU Usage: 25%
Memory Usage: 58%
Disk Usage: 42%

System Health Check Completed
```

---

### Objective 2: Application Health Checker

A Python script that checks application availability by sending an HTTP request and validating the returned status code.

#### Features
- Sends an HTTP GET request to the target application.
- Verifies HTTP status code.
- Reports application status as UP or DOWN.
- Handles connection and timeout exceptions.

#### Run Command

```bash
python scripts/application_health_checker.py
```

#### Sample Output

```text
===== Application Health Check =====
Status Code: 200
Application Status: UP
```

---

### Files

```text
scripts/
├── system_health_monitor.py
└── application_health_checker.py
```

### Screenshots

- `screenshots/all-tests-passed.png` – Playwright execution result
- `screenshots/problem_2.png` – Problem Statement 2 execution output
