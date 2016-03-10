import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Pagination from '../../src/index'

function shallowRender (Component, props = {}) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Component {...props}/>)
  return renderer.getRenderOutput()
}

describe('Shallow Rendering', function () {
  it('Pagination should render as a <ul>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[0].type).to.equal('ul')
  })
  it('Pagination should render as a <input>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[1].type).to.equal('input')
  })
  it('Pagination should render as a <button>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[2].type).to.equal('button')
  })
})
