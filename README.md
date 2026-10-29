# ITsCash project

## Start the project

1. Extract this entire folder.
2. Open a terminal inside `ITsCash_Project`.
3. Run `python -m http.server 8000` (or `py -m http.server 8000` on Windows).
4. Open `http://localhost:8000` in your browser.

VS Code Live Server also works. Use the same host and port for every workspace so accounts, orders, payments, and inventory share the same browser data. Opening each HTML file directly is not recommended because browsers may isolate file storage. Keep the images and folders together.

## Folders

| Folder | Purpose | Main files |
| --- | --- | --- |
| `dashboard/` | Store dashboard, cart, checkout, product views and program filters | `index.html`, `store.js`, `presentation.js`, `programs.js` |
| `cashier/` | ITsCash dashboard, tickets, payment verification, tuition, receipts, notifications and reports | `index.html`, `payments.js` |
| `proware/` | Uniform inventory, stock and price management, staff access and issuance | `index.html`, `inventory.js`, `inventory.css` |
| `shared/` | Common styles, photo catalog and workspace entry routing | `base.css`, `catalog.js`, `workspace.js` |
| `assets/images/` | Product images extracted from the single-file version | JPG, PNG and SVG assets |

Cashier's smaller scripts contain the earlier order manager and checkout integrations. Their loading order is preserved in each entry page.

## Direct pages

- Dashboard: `http://localhost:8000/dashboard/`
- Cashier: `http://localhost:8000/cashier/`
- Proware: `http://localhost:8000/proware/`

Cashier and Proware open their respective sign-in screens automatically.

## Demo accounts

On each sign-in screen, expand **First time here? Set up demo access** and click **Create demo accounts** before using these credentials.

| Workspace | Role | Username | Password |
| --- | --- | --- | --- |
| Cashier | Cashier | `demo.cashier` | `Cashier123!` |
| Cashier | Admin | `demo.admin` | `Admin123!` |
| Cashier | Student | `demo.student` | `Student123!` |
| Proware | Inventory Staff | `demo.inventory` | `Inventory123!` |
| Proware | Admin | `demo.admin` | `Admin123!` |

Cashier and Proware maintain separate account lists. Existing browser data remains available when served from the same origin. Starting on a new host or port starts a separate browser data store; use the in-app backup tools if you need to move records.

## Editing the code

Edit CSS and JavaScript in the relevant feature folder. Each page currently includes the common HTML layout and loads all feature scripts because checkout reservations, cashier payments and Proware inventory share the existing browser runtime. These are classic browser scripts, not ES modules: keep their script order and global function names intact. No bundler or npm install is needed.

Product photos are referenced relative to each entry page (`../assets/images/...`). Add or modify catalog metadata in `shared/catalog.js`; original store seeds remain in `dashboard/store.js`. The shared layout markup appears in all three entry pages, so apply common layout changes to each.

The QR-code library still uses the original CDN and needs internet access for QR rendering. This is a local browser demonstration: digital payments are simulated, and production account authorization and shared multi-user records require a backend.
