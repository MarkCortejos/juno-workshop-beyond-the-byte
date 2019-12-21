import React from 'react';
import { Formik, Field } from 'formik';
import Button from 'react-bootstrap/button';
import Container from 'react-bootstrap/container';
import Card from 'react-bootstrap/card';

export const Checkout = () => {
  const totalCost = 64.99
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted!')
  }
  
  const ShippingAddressForm = () => {
    return (
      <div>
        <Field type='text'name='streetName'/>
        {/* <Field type='text'name='StreetName'/>
        <Field type='text'name='StreetName'/>
        <Field type='text'name='StreetName'/>
        <Field type='text'name='StreetName'/> */}
      </div>
    )
  }
  const DeliveryTimeForm = () => {
    return (
      <div>
        <input type="text"/>
      </div>
    )
  }
  const PaymentForm = () => {
    return (
      <div>
        <input type="text"/>
      </div>
    )
  }

  return (
    <Formik>
      <Container>
        <form onSubmit={handleSubmit}>
          <Card>
            <Card.Title>Shipping Address</Card.Title>
            <ShippingAddressForm />
          </Card>
          <Card>
            <Card.Title>Delivery Time</Card.Title>
            <DeliveryTimeForm />
          </Card>
          <Card>
            <Card.Title>Payment</Card.Title>
            <PaymentForm />
          </Card>
          <div>
            {totalCost}
          </div>
        </form>
        <Button>
          Submit
        </Button>
      </Container>
    </Formik>
  )
}
