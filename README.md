# App for IT Supplies

This app is to manage the supplies in the IT deparment.\
I.e., Printer toners, Inks, Paper, etc.

**This project is only frontend.**

## Scripts to use

In the project, you can run:

### `npm install`

Install dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

OR

View on-line in [https://supplies.vercel.app/](https://supplies.vercel.app/).

## TO DO

- Some CSS 

#### Items 

- Add a New Item
  - **DONE** Form definition
  - **DONE** Form validation
- Buy inventory
  - **DONE** Form definition, for various items in one purchase
  - **DONE** Form validation 
  - **DONE** List of items to buy
  - **DONE** Confirm purchase
  - **DONE** Update items quantities
  - Add image and description in Buy Items

#### Shopping cart

- **DONE** Checking cart
- **DONE** Validate stock vs available quantity 
- **DONE** Stiky buttons on cart when is empty
- **DONE** Not enougth items for all items in cart
- Save state of cart in local session
- Refacto cart store to use name of item instead id

#### Next
- Items Logs, input and output transactions
- Inventory reports to PDF format
- Refacto Item components, use only one
- Refacto INC-DEC items
- Unify Yup validation schemas
  
#### Fix

- Deploy

---

Thanks https://iconos8.es/ for some beautiful assets