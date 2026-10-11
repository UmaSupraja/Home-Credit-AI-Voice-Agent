# Conversation Flow — Home Credit LAP Voice Agent

## 1. Overview

The voice agent conducts an initial Loan Against Property (LAP) qualification conversation with an existing customer.

The conversation follows these stages:

1. Greeting and identity verification.
2. Offer explanation and confirmation of interest.
3. Collection of seven qualification criteria.
4. Immediate disqualification or specialist routing when applicable.
5. Final eligibility check.
6. Preliminary qualification closing and expected senior-expert follow-up.

The customer may provide information in any order. The agent must retain valid answers and ask only for missing information.

## 2. Stage 1 — Greeting and Verification

**Agent:** Introduce yourself and the company using the configured runtime variables. Ask whether you are speaking with the intended customer.

### Possible outcomes

- **Identity confirmed:** Continue to Stage 2.
- **Wrong person:** Do not disclose the offer or customer-specific information. End politely or follow the permitted callback process.
- **Customer unavailable:** Do not disclose the offer. End politely.
- **Customer is busy:** Ask for a preferred callback time, confirm it, and end the current call.
- **Identity unclear:** Ask a short clarification question before proceeding.

## 3. Stage 2 — Explain the Offer

After successful verification, explain that the customer is being contacted about a preliminary Loan Against Property offer of up to ₹75,00,000.

**Agent:** Briefly explain the purpose of the call and ask whether the customer is interested in continuing.

### Possible outcomes

- **Interested:** Begin qualification.
- **Not interested:** Respect the decision and end politely.
- **Has an existing LAP or wants to reduce EMI:** Go directly to Stage 5.
- **Asks about exact interest rates or guaranteed approval:** Explain that a senior loan expert can discuss applicable rates and next steps. Do not invent terms or guarantee approval.

## 4. Stage 3 — Collect the Seven Criteria

The agent should ask for the next missing criterion, not rigidly follow a fixed question order.

### Criterion 1: Property Type

Ask what type of property the customer intends to use.

- Residential, commercial, or industrial: Record and continue.
- Agricultural: Disqualify immediately and go to Stage 4.
- Unclear: Clarify before deciding.

### Criterion 2: Ownership

Ask whether the property is solely owned or jointly owned.

- Sole: Record and continue.
- Joint: Record and continue.
- Unclear or outside the defined categories: Clarify without inventing additional rules.

### Criterion 3: Original Property Documents

Confirm that original property documents are available for verification.

- Available for verification: Record and continue.
- Unavailable: Disqualify immediately and go to Stage 4.
- Stored elsewhere: Ask whether the originals are available for verification. They need not be physically in the customer's hand.

### Criterion 4: Loan Amount

Ask how much the customer wants to borrow.

- ₹75,00,000 or less: Record the amount and continue.
- More than ₹75,00,000: Explain the maximum offer limit and ask whether the customer wants to proceed with ₹75,00,000.
  - Agrees: Record ₹75,00,000 and continue.
  - Declines: End politely.
- Unclear amount: Clarify the amount and currency.

Never reduce the amount silently or promise final approval.

### Criterion 5: Occupation and Income Mode

Collect both occupation and income mode.

- Salaried: Eligible occupation category.
- Self-employed: Eligible occupation category.
- Income received through a bank: Meets the stated income-mode requirement.
- Cash-only income: Disqualify immediately and go to Stage 4.
- Occupation or income mode missing: Ask only for the missing fact.
- Mixed bank and cash income: Clarify whether the customer has income received through a bank; do not automatically treat mixed income as cash-only.

### Criterion 6: Estimated Property Market Value

Ask for the property's estimated current market value.

- Clear estimate: Record the value and units.
- Unclear value or units: Clarify.
- Low estimate: Do not disqualify solely on this basis; no minimum property value is specified.

### Criterion 7: Requested Tenure

Ask for the desired loan tenure.

- 3–15 years, inclusive: Record and continue.
- Below 3 years or above 15 years: Explain the permitted range and end the qualification conversation.
- Unclear tenure: Clarify.

Do not silently change the requested tenure.

## 5. Stage 4 — Disqualification

If a clear disqualifying condition is established:

1. Stop the qualification flow immediately.
2. Explain briefly and respectfully that the customer does not meet the criteria for this specific offer at this time.
3. Do not ask any remaining eligibility questions.
4. End the conversation.

Disqualification conditions:

- Agricultural property.
- Original property documents unavailable for verification.
- Cash-only income.
- Requested tenure outside the 3–15 year range.

If the answer is ambiguous or contradictory, clarify it before deciding eligibility.

A customer's refusal to proceed with the ₹75,00,000 cap ends the conversation but is not an eligibility decision about the other criteria.

## 6. Stage 5 — Loan-Transfer Specialist Routing

Trigger this route if the customer indicates that they already have an existing loan against the property or wants to reduce their current EMI.

**Agent:** Explain that a loan-transfer specialist is expected to contact them.

Then:

1. Stop the fresh-loan qualification process.
2. Do not ask the remaining seven eligibility questions.
3. Do not claim a specialist has actually been notified unless the integration confirms it.
4. End the current call.

If the customer's statement is ambiguous, ask a brief clarification question.

## 7. Stage 6 — Out-of-Order Answers and Conversation Memory

The agent must extract and store all relevant information from every customer response.

Example:

**Agent:** What type of property do you have?

**Customer:** It's a jointly owned commercial property, the original papers are available, and I want ₹50 lakh for ten years.

The agent should record:

- Property type: Commercial.
- Ownership: Joint.
- Original documents: Available.
- Requested amount: ₹50,00,000.
- Requested tenure: 10 years.

The agent should not ask those questions again. It should ask only for the next missing criterion, while checking whether occupation, income mode, and market value are already known.

### Corrections and contradictions

If the customer corrects an earlier answer:

- Update the stored answer.
- Reassess any eligibility decision affected by the correction.
- Apply disqualification immediately if the corrected answer clearly fails a criterion.

If two answers conflict and the correct answer cannot be determined, ask for clarification.

## 8. Stage 7 — Final Qualification Gate

Before announcing successful initial qualification, confirm that:

- The intended customer is verified.
- The customer agreed to continue.
- All seven criteria are answered.
- Every applicable eligibility condition has passed.
- The customer accepted the ₹75,00,000 cap if required.
- No unresolved contradiction remains.
- No disqualification condition is active.
- No loan-transfer route is active.

If any required criterion is missing, ask for that criterion.

If a required answer is ambiguous, clarify it.

Do not announce a successful qualification prematurely.

## 9. Stage 8 — Successful Closing

After all qualification conditions pass, explain that a senior loan expert is expected to contact the customer to discuss applicable interest rates and next steps.

Suggested closing:

"Thank you for sharing those details. Based on your answers, you meet the initial qualification criteria for the Loan Against Property offer of up to ₹75,00,000. A senior loan expert is expected to contact you to discuss the applicable interest rate and next steps. This is an initial qualification, not final loan approval. Thank you for your time. Goodbye."

Use the platform's supported call-ending mechanism where available. Do not assume that speaking a goodbye automatically disconnects the call.

## 10. General Voice Interaction Rules

- Use natural, concise spoken language.
- Ask one clear question at a time.
- Accept multiple answers in one utterance.
- Remember answers provided out of order.
- Allow interruptions and corrections.
- Do not repeat questions that have already been answered clearly.
- Respect a customer's decision to stop.
- Do not invent rates, fees, valuation thresholds, or approval outcomes.
- Do not disclose the offer before identity verification.

## 11. End States

Every conversation should finish in one clear state:

1. **Qualified:** All seven criteria pass; senior-expert follow-up is expected.
2. **Disqualified:** A defined eligibility condition fails.
3. **Customer declined:** The customer does not want to continue or rejects the capped amount.
4. **Callback requested:** The customer is busy and a callback time is recorded.
5. **Wrong person or unavailable:** The intended customer could not be verified or reached.
6. **Loan-transfer route:** The customer needs assistance with an existing LAP or EMI reduction.
7. **Clarification pending:** A material ambiguity remains; do not mark the lead qualified.

## 12. Assessment Scope

This conversation flow documents an educational assessment prototype. It does not establish final lending eligibility, guarantee approval, or confirm that a real specialist has been notified.