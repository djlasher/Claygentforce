# Claygentforce App Setup

## Source Metadata

The Scenario 001 source now includes:

- `Claygentforce` custom application
- `Claygentforce Home` FlexiPage
- `Claygentforce_Home` custom tab
- `scenarioLauncher` Lightning Web Component

The app is intended as an orientation surface for the simulator. The launcher remains static and read-only.

---

## Setup And Verification Steps

1. Deploy `manifest/scenario-001-package.xml`.
2. Open Salesforce Setup.
3. In App Manager, confirm the `Claygentforce` app exists.
4. In Lightning App Builder, confirm `Claygentforce Home` exists.
5. Confirm the `Home` navigation item opens the `Claygentforce Home` page.
6. Open the App Launcher.
7. Open `Claygentforce`.
8. Confirm the Scenario Launcher renders.

The `Home` navigation item is source-controlled through the `Claygentforce_Home` custom tab. If an older deployment still opens the default Salesforce Home page, redeploy the current manifest and refresh the app.

---

## Expected Visible Result

The app home surface should show:

- `Claygentforce Scenario Launcher`
- Scenario 001 card with `Implemented MVP`
- Scenario 002 placeholder with `Planned`
- Static/read-only simulation note
