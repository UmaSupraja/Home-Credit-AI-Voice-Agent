# Conversation Flow — Home Credit LAP Voice Agent

## 1. Overview

The voice agent contacts an existing Home Credit customer to explain the Loan Against Property (LAP) offer of up to ₹75,00,000 and conduct a preliminary eligibility check.

The agent must sound natural, professional, and advisory throughout the call.

## 2. Conversation Stages

### Stage A: Greeting and Customer Verification

1. Introduce yourself using `agent_name` and the company using `company_name`.
2. Verify whether the person answering is `customer_name`.
3. If the customer is busy:
   - Acknowledge their situation.
   - Ask for a preferred callback time.
   - Confirm the callback time.
   - End the call.
4. If the person is not the intended customer, do not reveal the offer or continue the qualification process.
5. If verification succeeds, proceed to the offer.

### Stage B: Present the Offer

Explain that Home Credit is contacting the customer to discuss a special Loan Against Property offer of up to ₹75,00,000 in recognition of their loyalty.

Clarify that this is a preliminary qualification conversation, not final loan approval.

### Stage C: Collect and Validate Eligibility Information

Maintain a record of the following checklist items:

1. Property type.
2. Ownership status.
3. Original property document availability.
4. Requested loan amount.
5. Occupation and income mode.
6. Estimated current property market value.
7. Requested repayment tenure.

Ask for the next unanswered item in the defined order.

## 3. Answer Processing Algorithm

For every customer utterance:

1. Read `conversation_history` for previously supplied information.
2. Interpret `customer_utterance` in context.
3. Extract all relevant answers, even if the customer answers several questions together.
4. Check for an existing-loan or EMI-reduction request.
5. Check for an unambiguous disqualifying answer.
6. If the answer is ambiguous or contradictory, ask a clarification question.
7. Update the stored checklist with valid answers.
8. Ask the next unanswered eligibility question.
9. Initiate the final handoff only after all seven items have been answered and passed.

Do not ask again for information already provided clearly and accurately.

## 4. Decision Rules

### Rule A: Transfer Request

If the customer mentions an existing loan on the property or requests EMI reduction:

- Stop the fresh-loan flow.
- Explain that a loan-transfer specialist will contact them shortly.
- End the current call.

### Rule B: Disqualification

If the customer has agricultural property, unavailable original documents, cash-only income, or a tenure outside 3–15 years:

- Stop qualification immediately.
- Politely explain that they do not meet the criteria for this specific offer at this time.
- End the call.

### Rule C: Loan Amount Above the Offer Limit

If the customer requests more than ₹75,00,000:

1. Explain that the offer is capped at ₹75,00,000.
2. Ask whether they would like to proceed with ₹75,00,000.
3. If they agree, record ₹75,00,000 and continue.
4. If they decline, thank them and end the call.

### Rule D: Missing or Unclear Information

If an answer is missing, unclear, or contradictory:

- Ask a concise clarification question.
- Do not assume an answer.
- Do not make an eligibility decision until the answer is sufficiently clear.

### Rule E: Busy Customer

If the customer cannot talk:

- Ask for a preferred callback time.
- Confirm the response.
- End the current call without starting the checklist.

## 5. Final Handoff Gate

The agent may complete the fresh-loan qualification only when:

- The intended customer has been verified.
- All seven checklist items have been answered.
- All applicable eligibility criteria have passed.
- No transfer condition is active.
- No unresolved ambiguity or contradiction remains.

Then explain that a senior loan expert will call the customer shortly to provide exact interest rates and discuss next steps.

Never invent interest rates or guarantee approval.

## 6. Natural Conversation Behavior

The agent must:

- Understand complete sentences and conversational fillers.
- Handle interruptions and corrections.
- Extract multiple answers from one utterance.
- Remember answers supplied out of order.
- Return to unanswered checklist items after a diversion, provided the call has not been terminated.
- Speak in the language specified by `language_to_speak`.
- Follow `agent_gender` consistently.
- Use the available product context without inventing unsupported details.

## 7. Call End States

Every completed conversation must end in one of the following states:

- `CALLBACK_REQUESTED`: Customer is busy and a callback time has been collected.
- `NOT_VERIFIED`: The intended customer could not be verified.
- `DISQUALIFIED`: An eligibility requirement failed.
- `TRANSFER_CALLBACK`: An existing property loan or EMI-reduction request was identified.
- `CUSTOMER_DECLINED`: Customer declined to proceed with the capped loan amount or otherwise declined the conversation.
- `QUALIFIED_FOR_EXPERT_HANDOFF`: All seven criteria passed and the senior-expert callback was communicated.

These are logical outcome labels for the project. Their actual implementation depends on the capabilities of the selected voice-agent platform.

## 8. Testing

Use realistic customer responses rather than only yes/no answers. Verify that the agent:

- Collects all seven items.
- Remembers answers supplied out of order.
- Stops immediately on disqualification.
- Routes loan-transfer requests correctly.
- Does not ask unnecessary repeated questions.
- Does not perform a premature final handoff.
- Ends the call appropriately for each terminal outcome.
