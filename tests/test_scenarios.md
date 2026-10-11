# Test Scenarios — Home Credit LAP Voice Agent

## 1. Purpose

This document defines 30 test scenarios to evaluate the Home Credit LAP Voice Agent's qualification logic, conversation handling, routing, privacy, and closing behavior.

## 2. Test Scenarios

### TC-01 — Customer Verification
**Input:** The intended customer confirms their identity.

**Expected:** The agent proceeds to explain the offer only after verification.

### TC-02 — Wrong Person Answers
**Input:** The person answering says they are not the intended customer.

**Expected:** The agent does not disclose the offer or customer-specific information.

### TC-03 — Customer Is Busy
**Input:** The customer asks to speak later.

**Expected:** The agent requests and confirms a callback time, then ends the current call.

### TC-04 — Customer Declines the Offer
**Input:** The verified customer says they are not interested.

**Expected:** The agent respects the decision and ends politely.

### TC-05 — Eligible Residential Property
**Input:** The customer confirms residential property.

**Expected:** The property type is recorded as eligible.

### TC-06 — Eligible Commercial or Industrial Property
**Input:** The customer confirms commercial or industrial property.

**Expected:** The property type is recorded as eligible.

### TC-07 — Agricultural Property
**Input:** The customer confirms agricultural property.

**Expected:** The agent disqualifies the customer immediately and ends the qualification flow.

### TC-08 — Ownership Status
**Input:** The customer confirms sole or joint ownership.

**Expected:** The agent records the ownership status and continues.

### TC-09 — Original Documents Available
**Input:** The customer confirms that original property documents are available for verification.

**Expected:** The document criterion passes.

### TC-10 — Original Documents Unavailable
**Input:** The customer confirms that original property documents are unavailable.

**Expected:** The agent disqualifies the customer immediately.

### TC-11 — Loan Amount Within Limit
**Input:** The customer requests ₹50,00,000.

**Expected:** The requested amount is recorded and qualification continues.

### TC-12 — Loan Amount Above Limit, Customer Agrees
**Input:** The customer requests ₹90,00,000 and agrees to proceed with ₹75,00,000.

**Expected:** The agent records ₹75,00,000 as the amount for this offer and continues.

### TC-13 — Loan Amount Above Limit, Customer Declines
**Input:** The customer requests ₹90,00,000 and refuses the ₹75,00,000 cap.

**Expected:** The agent ends the conversation without continuing qualification.

### TC-14 — Salaried Customer With Bank Income
**Input:** The customer is salaried and receives income through a bank.

**Expected:** Both occupation and income mode are recorded as eligible.

### TC-15 — Self-Employed Customer With Bank Income
**Input:** The customer is self-employed and receives income through a bank.

**Expected:** Both occupation and income mode are recorded as eligible.

### TC-16 — Cash-Only Income
**Input:** The customer confirms that their income is received only in cash.

**Expected:** The agent disqualifies the customer immediately.

### TC-17 — Property Market Value
**Input:** The customer provides an estimated property value.

**Expected:** The agent records the estimate without inventing a minimum value threshold.

### TC-18 — Minimum Tenure
**Input:** The customer requests a tenure of 3 years.

**Expected:** The tenure criterion passes.

### TC-19 — Maximum Tenure
**Input:** The customer requests a tenure of 15 years.

**Expected:** The tenure criterion passes.

### TC-20 — Invalid Tenure
**Input:** The customer requests a tenure of 2 or 16 years.

**Expected:** The agent explains the permitted 3–15 year range and ends the qualification flow.

### TC-21 — Existing Loan Against Property
**Input:** The customer says they already have an existing loan against the property.

**Expected:** The agent routes the request to a loan-transfer specialist and ends the current qualification flow.

### TC-22 — EMI Reduction Request
**Input:** The customer asks to reduce their existing EMI.

**Expected:** The agent uses the loan-transfer route rather than continuing fresh-loan qualification.

### TC-23 — Multiple Answers in One Utterance
**Input:** "It's a jointly owned commercial property. The original documents are available, and I need ₹50 lakh for ten years."

**Expected:** The agent records all clearly provided answers and asks only for missing criteria.

### TC-24 — Answers Provided Out of Order
**Input:** The customer provides occupation, tenure, and property value before being asked.

**Expected:** The agent remembers those answers and does not ask for them again unnecessarily.

### TC-25 — Customer Corrects an Earlier Answer
**Input:** The customer initially says the property is residential, then corrects it to agricultural.

**Expected:** The agent updates the answer and disqualifies the customer.

### TC-26 — Ambiguous or Contradictory Answer
**Input:** The customer gives conflicting information about document availability or another required criterion.

**Expected:** The agent asks for clarification before deciding eligibility.

### TC-27 — Missing Occupation or Income Mode
**Input:** The customer provides occupation but not income mode, or income mode but not occupation.

**Expected:** The agent asks only for the missing information.

### TC-28 — All Seven Criteria Pass
**Input:** The verified customer is interested and passes every required eligibility criterion.

**Expected:** The agent announces preliminary qualification and explains that a senior loan expert is expected to contact the customer.

### TC-29 — Missing Criterion or Unsupported Question
**Input:** A required criterion is missing, or the customer asks for an interest rate that is not available in the approved context.

**Expected:** The agent asks for the missing information or explains that the senior expert can discuss applicable rates. It does not invent details or announce qualification prematurely.

### TC-30 — Privacy and Call Ending
**Input:** Test offer disclosure before verification and the call-ending behavior after a disqualification or final closing.

**Expected:** The offer remains confidential until verification. The configured end-call mechanism is used where supported, and actual disconnection is verified separately.

## 3. Test Execution Rules

- Execute each scenario against the agent version being evaluated.
- Record the actual behavior, not just the expected behavior.
- Mark each scenario as Pass, Fail, Blocked, or Not Run.
- Fix defects and rerun affected scenarios after changes.
- Do not claim a 100% pass rate unless all 30 scenarios have been executed and passed.

## 4. Success Criteria

The agent should verify identity before disclosing the offer, apply all eligibility rules correctly, remember out-of-order answers, disqualify immediately when required, route existing LAP or EMI-reduction requests correctly, and announce successful initial qualification only after all seven criteria pass.