# Test Scenarios — Home Credit LAP Voice Agent

## Purpose

Validate the voice agent's qualification logic, conversation handling, routing decisions, and call-ending behavior against the assessment requirements.

## Test Environment

- Platform: Retell AI
- Language: English
- Test type: Simulated or authorized test conversations
- Status: Not tested yet

## Test Cases

### TC01 — Successful Qualification

**Input:** The customer is verified and provides eligible answers for all seven checklist items.

**Expected result:** The agent collects all seven items, confirms preliminary qualification, and tells the customer that a senior loan expert will call shortly with exact interest rates.

### TC02 — Agricultural Property

**Input:** The customer confirms that the property is agricultural.

**Expected result:** Immediate polite disqualification. The agent ends the call without asking further eligibility questions.

### TC03 — Sole Ownership

**Input:** The customer confirms sole ownership.

**Expected result:** Accept the answer and continue.

### TC04 — Joint Ownership

**Input:** The customer confirms joint ownership with a family member or partner.

**Expected result:** Accept the answer and continue.

### TC05 — Original Documents Unavailable

**Input:** The customer confirms that the original property documents are unavailable.

**Expected result:** Immediate polite disqualification and call termination.

### TC06 — Loan Amount Within Limit

**Input:** The customer requests ₹50,00,000.

**Expected result:** Record the amount and continue.

### TC07 — Loan Amount Above Limit, Customer Accepts

**Input:** The customer requests ₹90,00,000 and agrees to proceed with ₹75,00,000 after the limit is explained.

**Expected result:** Record ₹75,00,000 as the requested amount for this offer and continue.

### TC08 — Loan Amount Above Limit, Customer Declines

**Input:** The customer requests ₹90,00,000 and refuses to proceed with ₹75,00,000.

**Expected result:** Respect the decision and end the call without continuing qualification.

### TC09 — Salaried, Bank Income

**Input:** The customer is salaried and receives income through a bank.

**Expected result:** Accept both answers and continue.

### TC10 — Self-Employed, Bank Income

**Input:** The customer is self-employed and receives income through a bank.

**Expected result:** Accept both answers and continue.

### TC11 — Cash-Only Income

**Input:** The customer confirms that their income is received only in cash.

**Expected result:** Immediate polite disqualification and call termination.

### TC12 — Property Market Value

**Input:** The customer gives an estimated current property market value.

**Expected result:** Record the estimate. Do not invent a minimum property-value threshold or confuse market value with the requested loan amount.

### TC13 — Tenure Below Minimum

**Input:** The customer requests a repayment tenure of 2 years.

**Expected result:** Explain that the permitted range is 3–15 years, disqualify for this offer, and end the call.

### TC14 — Tenure At Minimum

**Input:** The customer requests a tenure of 3 years.

**Expected result:** Accept the tenure and continue.

### TC15 — Tenure At Maximum

**Input:** The customer requests a tenure of 15 years.

**Expected result:** Accept the tenure and continue.

### TC16 — Tenure Above Maximum

**Input:** The customer requests a tenure of 16 years.

**Expected result:** Explain the eligibility requirement, disqualify for this offer, and end the call.

### TC17 — Existing Loan on Property

**Input:** The customer says that the property already has an existing loan.

**Expected result:** Explain that a loan-transfer specialist will contact the customer shortly. End the current call without continuing the fresh-loan checklist.

### TC18 — EMI Reduction Request

**Input:** The customer asks to reduce the EMI on their existing property loan.

**Expected result:** Route the customer to the loan-transfer specialist callback and end the current call.

### TC19 — Busy Customer

**Input:** The customer says they are busy.

**Expected result:** Ask for a preferred callback time, confirm it, and end the call without starting qualification.

### TC20 — Answers Provided Out of Order

**Input:** The customer gives property type, ownership, document availability, occupation, and income mode in one response.

**Expected result:** Record all clear answers and do not ask those questions again. Ask the next unanswered item in the prescribed order.

### TC21 — Multiple Answers in One Sentence

**Input:** The customer provides their requested amount and tenure in a single response.

**Expected result:** Record both answers, validate them, and ask the next missing item.

### TC22 — Contradictory Answer

**Input:** The customer gives conflicting answers about document availability or income mode.

**Expected result:** Clarify the contradiction before recording a final answer or deciding eligibility.

### TC23 — Ambiguous Answer

**Input:** The customer gives an unclear property type, amount, or tenure.

**Expected result:** Ask a concise clarification question rather than guessing.

### TC24 — Interruption and Recovery

**Input:** The customer interrupts a question with a different relevant detail.

**Expected result:** Process the new detail, preserve the conversation context, and resume with the next unanswered question.

### TC25 — Premature Handoff Prevention

**Input:** The customer passes six checklist items but has not answered the seventh.

**Expected result:** Do not announce successful qualification. Ask for the missing item.

### TC26 — Customer Not Verified

**Input:** The person answering is not the intended customer.

**Expected result:** Do not disclose the offer or continue qualification. End politely.

### TC27 — Customer Declines

**Input:** The customer does not want to continue the conversation.

**Expected result:** Respect the decision and end courteously.

## Test Reporting

After each test, record:

- Test case ID.
- Actual conversation outcome.
- Pass or fail.
- Observed issue, if any.
- Prompt modification required.
- Retest result after modification.

Do not mark a test as passed until the configured voice agent has actually been tested.
