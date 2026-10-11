# Home Credit LAP AI Voice Agent

An AI voice-agent prototype designed to demonstrate an initial Loan Against Property (LAP) qualification conversation. The agent verifies the intended customer, explains a preliminary offer of up to ₹75,00,000, collects eligibility information, handles disqualification, and identifies when a request should be routed to a loan-transfer specialist.

## Project Links

| Resource                      | Link                                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Live Demo**                 | [Open the deployed voice agent](https://home-credit-ai-voice-agent.onrender.com)                                                      |
| **Audio Demonstration (MP4)** | [Watch the project demonstration on Google Drive](https://drive.google.com/file/d/13r1BTEQ8_L4AbUe8iqxzP0GtPgSkALrc/view?usp=sharing) |
| **GitHub Repository**         | [View the source code](https://github.com/UmaSupraja/Home-Credit-AI-Voice-Agent)                                                      |

If the live demo is temporarily unavailable, use the video recording to review the demonstration.

## Project Objective

The objective is to build a conversational voice agent that conducts preliminary LAP qualification through natural speech rather than a rigid question-and-answer checklist.

The agent should remember information provided out of order, apply the defined eligibility rules, avoid unnecessary repeated questions, and identify the appropriate next step.

## Key Features

- **Customer verification:** Verifies the intended customer before disclosing the offer.
- **Offer explanation:** Communicates a preliminary LAP offer of up to ₹75,00,000.
- **Seven-criteria qualification:** Evaluates property type, ownership, document availability, loan amount, occupation, income mode, property value, and tenure.
- **Offer-limit handling:** Requests customer consent before proceeding with the ₹75,00,000 cap when a higher amount was requested.
- **Immediate disqualification:** Stops qualification when a defined ineligible condition is confirmed.
- **Loan-transfer routing:** Identifies existing LAP or EMI-reduction requests.
- **Conversation memory:** Retains answers supplied in different orders and avoids unnecessary repetition.
- **Clarification handling:** Resolves ambiguous or contradictory answers before deciding eligibility.
- **Preliminary handoff:** Indicates that a senior loan expert is expected to contact qualified leads.
- **Voice interaction:** Supports a conversational voice-based demonstration through the web interface.

## Eligibility Rules

| Criterion             | Assessment rule                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| Property type         | Residential, commercial, or industrial eligible; agricultural ineligible                         |
| Ownership             | Sole or joint ownership                                                                          |
| Original documents    | Must be available for verification                                                               |
| Loan amount           | Up to ₹75,00,000; consent required to proceed at the cap if the customer initially requests more |
| Occupation            | Salaried or self-employed                                                                        |
| Income mode           | Income received through a bank; cash-only income is ineligible                                   |
| Property market value | Estimate recorded; no minimum threshold specified                                                |
| Loan tenure           | 3–15 years, inclusive                                                                            |

The agent must complete all seven qualification criteria before announcing successful initial qualification. Property value is recorded as part of the assessment and does not have a specified minimum threshold.

## Conversation Flow

1. Greet the customer and verify identity.
2. Explain the preliminary LAP offer after successful verification.
3. Confirm interest in continuing.
4. Collect and remember the qualification information.
5. Clarify missing or contradictory answers.
6. Apply disqualification or loan-transfer routing when required.
7. Check all eligibility conditions before the final closing.
8. Explain the expected senior-expert follow-up without guaranteeing approval.

## Technology Stack

- **Voice-agent orchestration:** Bolna
- **Language model:** GPT-4.1 mini configuration
- **Speech synthesis:** ElevenLabs
- **Speech recognition:** Deepgram
- **Backend:** Node.js and Express
- **Frontend:** HTML, CSS, and JavaScript
- **Deployment:** Render
- **Version control:** Git and GitHub

## Repository Structure

```text
Home-Credit-AI-Voice-Agent/
├── prompts/
│   └── system_prompt.md
├── docs/
│   ├── business_rules.md
│   ├── conversation_flow.md
│   └── demo_and_recordings.md
├── tests/
│   ├── test_scenarios.md
│   └── test_results.md
├── public/
│   └── index.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Testing and Results

The project defines **30 test scenarios** covering customer verification, eligibility, loan-limit handling, disqualification, specialist routing, out-of-order answers, clarification, privacy, and call termination.

See:

- [`tests/test_scenarios.md`](tests/test_scenarios.md)
- [`tests/test_results.md`](tests/test_results.md)

Record observed outcomes in the test-results document. Report a 100% pass rate only when all 30 scenarios have been executed and passed.

## Run Locally

### Prerequisites

- Node.js and npm
- A configured Bolna account and API key
- The required agent ID

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/UmaSupraja/Home-Credit-AI-Voice-Agent.git
   cd Home-Credit-AI-Voice-Agent
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local `.env` file in the project root:

   ```env
   BOLNA_API_KEY=your_bolna_api_key
   BOLNA_AGENT_ID=your_bolna_agent_id
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open the local URL shown in the terminal.

**Security:** Never commit `.env` or expose API keys in source code, screenshots, recordings, or public logs. Use the deployment platform's environment-variable settings for hosted deployments.

## Limitations and Disclaimer

- This is an educational assessment prototype, not an official production Home Credit service.
- Initial qualification does not constitute final loan approval.
- Interest rates, fees, and final loan terms are not guaranteed.
- The senior-expert callback is an expected next step, not proof of an actual notification or assignment.
- Live-demo availability and call behavior depend on the configured external services.
- The prototype must not be used to make real lending decisions without appropriate authorization, validation, security, and compliance review.

## Author

**Supraja Putrevu**

B.Tech – Computer Science & Engineering (Data Science)

AI | Machine Learning | RAG | Software Development

GitHub: [https://github.com/UmaSupraja](https://github.com/UmaSupraja)
