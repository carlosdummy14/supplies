import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { addItem } from '../reducers/itemsReducer'

const initialValues = {
  name: '',
  description: '',
  stock: 0,
  image: ''
}

const AddItemSchema = (items) => {
  return Yup.object().shape({
    name: Yup.string()
      .min(5)
      .max(30, 'Too Long!')
      .required('Required')
      .trim()
      .notOneOf(items, 'Item already exist'),
    description: Yup.string().min(10).max(40, 'Too Long!').required('Required'),
    stock: Yup.number().integer().min(0).max(99).required('Required'),
    image: Yup.string()
  })
}

const AddItem = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ items }) => items.map((item) => item.name))
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
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value.toUpperCase()
    }))
  }

  return (
    <>
      <h1 className="app-titles">Add new Item</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={AddItemSchema(items)}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setValues }) => (
          <Form className="form form--maxwidth">
            <div className="input-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <div className="form__field">
                <Field
                  autoFocus="autofocus"
                  className="input input-lg"
                  name="name"
                  placeholder='Name of item'
                  type="text"
                  onChange={(e) => handleNameInput(e, setValues)}
                />
                {errors.name && touched.name
                  ? (
                  <span className="error">{errors.name}</span>
                    )
                  : (
                  <span className="error" />
                    )}
              </div>
            </div>

            <div className="input-group">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <div className="form__field">
                <Field
                  className="input input-lg"
                  name="description"
                  placeholder='Description'
                  type="text"
                />
                {errors.description && touched.description
                  ? (
                  <span className="error">{errors.description}</span>
                    )
                  : (
                  <span className="error" />
                    )}
              </div>
            </div>

            <div className="input-group">
              <label className="form-label" htmlFor="stock">
                Initial Stock
              </label>
              <div className="form__field">
                <Field
                className="input input-lg"
                name="stock" placeholder='Initial stock' type="number" />
                {errors.stock && touched.stock
                  ? (
                  <span className="error">{errors.stock}</span>
                    )
                  : (
                  <span className="error" />
                    )}
              </div>
            </div>

            <div className="input-group">
              <label className="form-label" htmlFor="image">
                Image
              </label>
              <div className="form__field">
                <Field className="input input-lg" name="image" type="file" />
                {errors.image && touched.image
                  ? (
                  <span className="error">{errors.image}</span>
                    )
                  : (
                  <span className="error" />
                    )}
              </div>
            </div>
            <div className="form__buttons">
              <button
                className="button button-small button-small--nopadding"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AddItem
