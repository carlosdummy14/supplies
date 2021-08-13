# App for IT Supplies

This app is to manage the supplies in the IT deparment.\
I.e., Printer toners, Inks, Paper, etc.

## Scripts to use

In the project, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm server`

Launches a json-server with the information of db.json file.\
[http://localhost:3004/items](http://localhost:3004/items)


## TO DO

- FULL CSS --- jeje

#### Items 

- Add a New Item
  - **DONE** Form definition
  - **DONE** Form validation
- Buy inventory
  - **DONE** Form definition, for various items in one purchase
  - **DONE** Form validation 
  - **DONE** List of items to buy
  - Confirm purchase
  - Update items quantities

#### Shopping car

- **DONE** Checking car
- **DONE** Validate stock vs available quantity 
- Save state of car in local session

#### Next
- Add quantity to items
- Items Logs, input and output transactions
- Inventory reports to PDF format
- Refacto Item components, use only one
- Refacto INC-DEC items
- Unify Yup validation schemas
  