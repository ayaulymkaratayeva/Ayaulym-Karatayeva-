# Personal Assignment 1 Report

## 1. Project Overview

**Project Name:**  
Sleep Hours Calculator

**What does your calculator do?**  
This calculator measures how many hours a person slept based on bedtime and wake-up time. It also classifies the sleep duration as not enough, healthy, or too much sleep.

---

## 2. Inputs

| Input Name | Unit | What it Represents |
|---|---|---|
| Bedtime | Time (HH:MM) | The time when the user goes to sleep |
| Wake Time | Time (HH:MM) | The time when the user wakes up |

**Explanation:**  
I chose these inputs because sleep duration depends on the time a person goes to bed and wakes up. These are measurable and realistic daily values.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  

Sleep Hours = (Wake Time − Bedtime)

Since JavaScript calculates time in milliseconds, the formula used is:

Sleep Hours = (wake − bed) / (1000 × 60 × 60)

**Steps:**
1. Get input values from HTML using `getElementById`.
2. Convert time strings into Date objects.
3. If wake time is earlier than bedtime, add one day.
4. Subtract bedtime from wake time.
5. Convert milliseconds into hours.
6. Store result in a variable.

---

## 4. Conditional Logic (if / else)

The program interprets sleep duration as:

- If sleep < 7 hours → Not enough sleep  
- If sleep between 7 and 9 hours → Healthy sleep  
- If sleep > 9 hours → Too much sleep  

These ranges are based on general adult sleep recommendations (7–9 hours).

---

## 5. Output

The program shows:

- Calculated number of hours slept  
- Sleep quality category (Not enough / Healthy / Too much)

The result is displayed directly in HTML using `innerHTML`.

---

## 6. Edge Cases / Unusual Inputs

- If the user leaves an input empty → The program shows a message: “Please enter both times.”
- If wake time is earlier than bedtime → The program assumes sleep passed midnight and adds one day.
- Negative numbers are not possible because the input type is "time".

---

## 7. Optional Features

- Automatic midnight adjustment
- Validation message if inputs are empty
- Styled user interface with CSS

---

## 8. How to Run the Project

1. Open the GitHub Pages link:
   https://your-username.github.io/programming-assignment-1/
2. Enter bedtime and wake time.
3. Click the calculate button.
4. View the result directly in the browser.

## 9. AI Usage

Yes.

I used AI to help with:
- JavaScript time calculation structure
- Syntax corrections

I fully understand:
- How variables store values
- How time difference is calculated
- How if/else conditions classify results
- How output is displayed in HTML

---

## 10. Reflection

From this assignment, I learned how input → process → output works in JavaScript.  
I practiced using variables, mathematical calculations, and conditional logic.  
I also learned how HTML, CSS, and JavaScript work together in a web project.
