import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addItem } from '../reducers/itemsReducer'

const initialValues = {
  name: '',
  description: '',
  image: ''
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    margin: '0 auto'
  }
}

const AddItem = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ items }) => items)
  const history = useHistory()

  const handleSubmit = (values) => {
    const { name, description, image } = values
    const newItem = {
      id: items.length + 1,
      name: name,
      description: description,
      stock: 1,
      available: true,
      createdAt: '2021-04-09T22:51:55.756Z',
      img: image
    }

    dispatch(addItem(newItem))

    history.replace('/')
  }

  return (
    <>
      <h1>Add new Item</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form style={styles.form}>
          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' />
          <label htmlFor='description'>Description</label>
          <Field name='description' type='text' />
          <label htmlFor='image'>Image</label>
          <Field name='image' type='file' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default AddItem
