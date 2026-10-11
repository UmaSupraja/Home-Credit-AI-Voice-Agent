# Demo and Recordings — Home Credit LAP Voice Agent

## 1. Project Overview

The Home Credit LAP Voice Agent is an AI voice-agent assessment prototype that demonstrates an initial Loan Against Property (LAP) qualification conversation.

The agent verifies the intended customer, explains the preliminary offer of up to ₹75,00,000, evaluates seven eligibility criteria, handles disqualification, and routes existing LAP or EMI-reduction requests to the appropriate specialist route.

## 2. Project Links

- **Live Demo (Render):** https://home-credit-ai-voice-agent.onrender.com
- **Audio Demonstration (MP4):** https://drive.google.com/file/d/13r1BTEQ8_L4AbUe8iqxzP0GtPgSkALrc/view?usp=sharing
- **GitHub Repository:** https://github.com/UmaSupraja/Home-Credit-AI-Voice-Agent

The live demo allows reviewers to interact with the voice-agent interface. The video recording provides an alternative way to review the demonstration.

## 3. How to Access the Demo

1. Open the Render deployment link.
2. Wait for the page to load.
3. Start a voice session using the interface.
4. Respond to the identity-verification question.
5. Provide fictional answers to the qualification questions.
6. Observe the agent's responses, eligibility handling, and closing behavior.

If the live demo is unavailable, use the MP4 demonstration link above.

## 4. Demonstration Scenario

The example below illustrates an eligible test conversation.

| Qualification item | Example response |
|---|---|
| Customer verification | Identity confirmed |
| Interest | Interested |
| Property type | Residential |
| Ownership | Sole ownership |
| Original documents | Available for verification |
| Loan amount | ₹50,00,000 |
| Occupation | Salaried |
| Income mode | Income received through a bank |
| Estimated property value | ₹1,00,00,000 |
| Requested tenure | 10 years |

Expected behavior: The agent records the information, asks only for missing criteria, and gives the preliminary qualification closing only after all seven criteria pass.

This is a fictional example, not a real customer record or a guarantee of loan approval.

## 5. Important Scenarios

The assessment also covers:

- Agricultural property disqualification.
- Unavailable original property documents.
- Cash-only income.
- Tenure outside the permitted 3–15 year range.
- Requests above ₹75,00,000 and customer acceptance or rejection of the cap.
- Existing LAP and EMI-reduction routing.
- Out-of-order answers and corrections.
- Identity verification and privacy.
- Final qualification and call-ending behavior.

Refer to `tests/test_scenarios.md` for the complete 30-scenario test plan.

## 6. Recordings and Evidence

The MP4 demonstration is available through the Google Drive link in Section 2.

Additional evidence, where available, may include:
- Screenshots of the deployed interface.
- Voice conversation transcripts.
- Test recordings.
- Relevant deployment or session logs.

Do not include API keys, private customer data, or confidential information in shared evidence.

## 7. Deployment Notes

The application was previously reported as deployed on Render. Verify the live URL and current session-creation behavior when reviewing the submitted version.

The demonstration is an educational prototype and does not constitute an official production Home Credit service. Initial qualification is not final loan approval, and actual specialist notification must not be claimed unless confirmed by an integration.

## 8. Assessment Artifacts

- `prompts/system_prompt.md`
- `docs/business_rules.md`
- `docs/conversation_flow.md`
- `docs/demo_and_recordings.md`
- `tests/test_scenarios.md`
- `tests/test_results.md`
- `README.md`

These files document the agent's instructions, business rules, conversation flow, test plan, and test results.