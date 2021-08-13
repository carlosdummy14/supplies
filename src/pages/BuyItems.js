import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { addItemToBuy, emptyBuy } from '../reducers/buyReducer'
import ListItemsToBuy from '../components/ListItemsToBuy'

const initialValues = {
  name: '',
  quantity: 1
}

const BuyItemsSchema = (items = []) => {
  return Yup.object().shape({
    name: Yup.string().oneOf(items, 'Item not valid').required('Required'),
    quantity: Yup.number().positive().integer().max(99).required('Required')
  })
}

const styles = {
  form: {
    display: 'flex',
    width: '600px',
    margin: '0 auto'
  }
}

const BuyItems = () => {
  const items = useSelector(({ items }) => items.map(item => item.name))
  const dispatch = useDispatch()
  // const history = useHistory()

  const handleSubmit = (values, { resetForm }) => {
    const { name, quantity } = values
    const newItem = {
      name: name.toUpperCase(),
      quantity: quantity
    }

    dispatch(addItemToBuy(newItem))
    resetForm(initialValues)
  }

  const handleClear = () => {
    dispatch(emptyBuy())
  }

  return (
    <>
      <h1>Buy Items</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={BuyItemsSchema(items)}
        onSubmit={handleSubmit}
      >
        {
          ({ errors, touched }) => (
            <Form style={styles.form}>
              <label htmlFor='name'>Name</label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Field autoFocus='autofocus' list='nameList' name='name' />
                <datalist id='nameList'>
                  {
                    items.map((item) => <option key={`${item}`} value={`${item}`} />)
                  }
                </datalist>
                {
                errors.name && touched.name
                  ? (<span>{errors.name}</span>)
                  : null
                }
              </div>
              <label htmlFor='quantity'>Quantity</label>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Field name='quantity' type='number' />
                {
                errors.quantity && touched.quantity
                  ? (<span>{errors.quantity}</span>)
                  : null
              }
              </div>

              <button type='submit'>Submit</button>
              <button type='button' onClick={handleClear}>Clear Buy</button>
            </Form>
          )
        }
      </Formik>
      <ListItemsToBuy />
    </>
  )
}

export default BuyItems
