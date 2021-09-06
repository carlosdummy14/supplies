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
    quantity: Yup.number().positive('Wrong quantity').integer('Wrong quantity').max(99, 'Maximun 99').required('Required')
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
          <div className='form__inputs'>

            <div className='input-group'>
              <label className='form-label' htmlFor='name'>Name</label>
              <div className='form__field'>
                <Field autoFocus='autofocus' className='input input--lg' list='nameList' name='name' />
                <datalist id='nameList'>
                  {items.map((item) => (
                    <option key={`${item}`} value={`${item}`} />
                  ))}
                </datalist>
                {errors.name && touched.name
                  ? <span className='error'>{errors.name}</span>
                  : <span className='error' />}
              </div>
            </div>

            <div className='input-group'>
              <label className='form-label' htmlFor='quantity'>Quantity</label>
              <div className='form__field'>
                <Field className='input' name='quantity' type='number' />
                {errors.quantity && touched.quantity
                  ? <span className='error'>{errors.quantity}</span>
                  : <span className='error' />}
              </div>
            </div>
          </div>

          <div className={'form__buttons'.concat(haveItemsToBuy ? ' tree-buttons' : '')}>
            <button className='button button-small button-small--nopadding' type='submit'>Submit</button>
            {
              haveItemsToBuy
                ? (
                  <>
                    <Button handleClick={handleClear} style='button-small button-small--nopadding' text='Clear Buy' type='button' />
                    <Button handleClick={() => setIsConfirm(true)} style='button-small button-small--nopadding' text='Buy' />
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
