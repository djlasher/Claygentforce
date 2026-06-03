# Claygentforce App Setup

## Source Metadata

The Scenario 001 source now includes:

- `Claygentforce` custom application
- `Claygentforce Home` FlexiPage
- `scenarioLauncher` Lightning Web Component

The app is intended as an orientation surface for the simulator. The launcher remains static and read-only.

---

## Setup And Verification Steps

1. Deploy `manifest/scenario-001-package.xml`.
2. Open Salesforce Setup.
3. In App Manager, confirm the `Claygentforce` app exists.
4. In Lightning App Builder, confirm `Claygentforce Home` exists.
5. If needed, activate or assign `Claygentforce Home` for the `Claygentforce` app.
6. Open the App Launcher.
7. Open `Claygentforce`.
8. Confirm the Scenario Launcher renders.

Activation or assignment may need to be manual because Lightning page activation can be org-specific.

---

## Expected Visible Result

The app home surface should show:

- `Claygentforce Scenario Launcher`
- Scenario 001 card with `Implemented MVP`
- Scenario 002 placeholder with `Planned`
- Static/read-only simulation note
