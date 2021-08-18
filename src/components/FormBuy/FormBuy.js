import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { addItemToBuy, emptyBuy } from '../../reducers/buyReducer'
import Button from '../Button'

import './FormBuy.css'

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

const FormBuy = ({ items, buy, setIsConfirm }) => {
  const dispatch = useDispatch()

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

  const haveItemsToBuy = buy.length > 0

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BuyItemsSchema(items)}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className='form'>

          <label htmlFor='name'>Name</label>
          <div className='form__field'>
            <Field autoFocus='autofocus' list='nameList' name='name' />
            <datalist id='nameList'>
              {items.map((item) => (
                <option key={`${item}`} value={`${item}`} />
              ))}
            </datalist>
            {errors.name && touched.name
              ? <span>{errors.name}</span>
              : null}
          </div>

          <label htmlFor='quantity'>Quantity</label>
          <div className='form__field'>
            <Field name='quantity' type='number' />
            {errors.quantity && touched.quantity
              ? <span>{errors.quantity}</span>
              : null}
          </div>

          <div className={'form__buttons'.concat(haveItemsToBuy ? ' tree-buttons' : '')}>
            <button type='submit'>Submit</button>
            {
              haveItemsToBuy
                ? (
                  <>
                    <Button handleClick={handleClear} text='Clear Buy' type='button' />
                    <Button handleClick={() => setIsConfirm(true)} text='Buy' />
                  </>
                  )
                : null
            }
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormBuy
