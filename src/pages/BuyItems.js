import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { addItem } from '../reducers/itemsReducer'

const initialValues = {
  name: '',
  quantity: 1
}

const BuyItemsSchema = Yup.object().shape({
  name: Yup.string().min(5).max(30, 'Too Long!').required('Required'),
  quantity: Yup.number().positive().integer().max(99).required('Required')
})

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '0 auto'
  }
}

const BuyItems = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ items }) => items)
  const history = useHistory()

  const handleSubmit = (values) => {
    const { name, quantity } = values
    const newItem = {
      id: items.length + 1,
      name: name.toUpperCase(),
      quantity: quantity,
      available: true,
      createdAt: '2021-04-09T22:51:55.756Z'
    }

    dispatch(addItem(newItem))

    history.replace('/')
  }

  return (
    <>
      <h1>Buy Items</h1>
      <div>list of items buyed</div>
      <Formik
        initialValues={initialValues}
        validationSchema={BuyItemsSchema}
        onSubmit={handleSubmit}
      >
        {
          ({ errors, touched }) => (
            <Form style={styles.form}>
              <label htmlFor='name'>Name</label>
              <Field autoFocus='autofocus' name='name' type='text' />
              {
                errors.name && touched.name
                  ? (<div>{errors.name}</div>)
                  : null
              }
              <label htmlFor='quantity'>Quantity</label>
              <Field name='quantity' type='number' />
              {
                errors.quantity && touched.quantity
                  ? (<div>{errors.quantity}</div>)
                  : null
              }
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </>
  )
}

export default BuyItems
