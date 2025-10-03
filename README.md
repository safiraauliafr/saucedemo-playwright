# SauceDemo Automation Project  

![CI](https://github.com/ysafiraauliafr/saucedemo-playwright/actions/workflows/ci.yml/badge.svg)  

## 📌 Overview  
This project automates the [SauceDemo](https://www.saucedemo.com) web application using **Playwright with TypeScript**.  
It follows modern QA automation best practices, including:  

- **Page Object Model (POM)** for maintainability  
- **Data-driven testing** (Excel/CSV as external test data)  
- **Parallel + cross-browser execution** (Chromium, Firefox, WebKit)  
- **Automatic screenshots on failure**  
- **HTML test reports** for clear results  

The framework is designed to be **scalable, modular, and CI-ready**, making it suitable for enterprise-level testing.  

---

## 🚀 Features Implemented  

- ✅ **Data-driven testing** with Excel/CSV  
- ✅ **Screenshots on failure** for debugging  
- ✅ **HTML reports** (Playwright built-in)  
- ✅ **Page Object Model (POM)** structure  
- ✅ **Cross-browser execution** (Chromium, Firefox, WebKit)  
- ✅ **Parallel execution** using Playwright test runner  

---

## 🛠 Installation  

Clone the repository and install dependencies:  

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npx playwright install

## 🛠️ Running Tests Locally (Backup Plan)

In case the CI/CD pipeline does not run successfully on GitHub Actions, you can execute the tests locally by following these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/saucedemo-playwright.git
   cd saucedemo-playwright

