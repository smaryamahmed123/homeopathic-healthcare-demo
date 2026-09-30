# ShifaConnect — Homeopathic Healthcare Platform Demo

A frontend-only React + Vite + MUI concept demo based on the supplied Homeopathic Healthcare & Pharmacy Platform blueprint.

## What is included

### Patient side
- Landing / intent selection
- Unified search
- Doctor profiles
- Clinic profiles
- Pharmacy storefronts
- Medicine details
- Appointment booking
- Demo consultation
- Digital prescription
- Health records
- Cart and checkout
- Order tracking
- Patient dashboard

### Provider side
One dashboard with account-type switching:
- Doctor
- Clinic / Hospital
- Pharmacy
- Pharmacy + Clinic

### Admin side
- Provider verification queue
- Demo statistics

## Important

This is a UI prototype. It does NOT implement real authentication, medical records, clinical decisions, payment processing, courier APIs, AI search, or a production database.

All provider, patient, medicine, prescription and transaction data in the demo is fictional.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Suggested next phase

After the UI is approved:
1. Express API
2. MongoDB schema
3. Authentication / role permissions
4. Provider verification workflow
5. Real appointments
6. Real prescription records
7. Pharmacy inventory and orders
8. Payment gateway
9. Courier integration
10. Notifications
11. AI/search service
12. i18n
