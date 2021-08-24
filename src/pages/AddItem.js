import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { addItem } from '../reducers/itemsReducer'

const initialValues = {
  name: '',
  description: '',
  stock: 1,
  image: ''
}

const AddItemSchema = (items) => {
  return Yup.object().shape({
    name: Yup.string().min(5).max(30, 'Too Long!').required('Required').trim().notOneOf(items, 'Item already exist'),
    description: Yup.string().min(10).max(40, 'Too Long!').required('Required'),
    stock: Yup.number().positive().integer().max(99).required('Required'),
    image: Yup.string()
  })
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
  const items = useSelector(({ items }) => items.map(item => item.name))
  const history = useHistory()

  const handleSubmit = (values) => {
    const { name, description, stock, image } = values
    const newItem = {
      id: items.length + 1,
      name: name,
      description: description,
      stock: stock,
      available: true,
      createdAt: '2021-04-09T22:51:55.756Z',
      img: image
    }

    dispatch(addItem(newItem))

    history.replace('/')
  }

  const handleNameInput = (e, setValues) => {
    setValues(
      prevValues => (
        {
          ...prevValues,
          [e.target.name]: e.target.value.toUpperCase()
        }
      )
    )
  }

  return (
    <>
      <h1 className='app-titles'>Add new Item</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={AddItemSchema(items)}
        onSubmit={handleSubmit}
      >
        {
          ({ errors, touched, setValues }) => (
            <Form style={styles.form}>
              <label htmlFor='name'>Name</label>
              <Field
                autoFocus='autofocus'
                name='name'
                type='text'
                onChange={e => handleNameInput(e, setValues)}
              />
              {
                errors.name && touched.name
                  ? (<div>{errors.name}</div>)
                  : null
              }
              <label htmlFor='description'>Description</label>
              <Field name='description' type='text' />
              {
                errors.description && touched.description
                  ? (<div>{errors.description}</div>)
                  : null
              }
              <label htmlFor='stock'>Description</label>
              <Field name='stock' type='number' />
              {
                errors.stock && touched.stock
                  ? (<div>{errors.stock}</div>)
                  : null
              }
              <label htmlFor='image'>Image</label>
              <Field name='image' type='file' />
              {
                errors.image && touched.image
                  ? (<div>{errors.image}</div>)
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

export default AddItem
