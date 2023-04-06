import React from 'react'
import ProductProvider from './ProductProvider'

describe('<ProductProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProductProvider />)
  })
})