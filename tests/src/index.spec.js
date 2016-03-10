import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Pagination from '../../src/index'

function shallowRender (Component, props = {}) {
  const renderer = TestUtils.createRenderer()
  renderer.render(<Component {...props}/>)
  return renderer.getRenderOutput()
}

function DomReder (Component, props = {}) {
  return TestUtils.renderIntoDocument(<Component {...props}/>)
}
describe('Shallow Rendering', function () {
  it('Pagination should render as a <div>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.type).to.equal('div')
  })
  it('Pagination page should render as a <ul>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[0].type).to.equal('ul')
  })
  it('Pagination input should render as a <input>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[1].type).to.equal('input')
  })
  it('Pagination button should render as a <button>', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[2].type).to.equal('button')
  })
  it('When current page is 1, the previous page should be disabled', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 10})
    expect(pagination.props.children[0].props.children[0].props.className).to.equal('nd-pagination-pager nd-pagination-pager-disabled')
  })
  it('When current page is last page, the next page should be disabled', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 500})
    expect(pagination.props.children[0].props.children[pagination.props.children[0].props.children.length - 1].props.className).to.equal('nd-pagination-pager nd-pagination-pager-disabled')
  })
  it('When the component rendered, the jump button should be disabled', function () {
    const pagination = shallowRender(Pagination, {total: 500, size: 500})
    expect(pagination.props.children[pagination.props.children.length - 1].props.className).to.equal('nd-pagination-button nd-pagination-button-disabled')
  })
})

describe('Dom Rendering', function () {
  it('When the total number is not evenly divisible by the size, the pages should be an Integer and it should rounded up  ', function () {
    const pagination = DomReder(Pagination, {total: 487, size: 10})
    expect(pagination.state.pages).to.equal(Math.ceil(487 / 10))
  })

  it('Click the next page, the current page should add 1', function () {
    const pagination = DomReder(Pagination, {total: 500, size: 10})
    const currentPage = pagination.state.currentPage
    const pages = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li')
    const nextPage = pages[pages.length - 1]
    TestUtils.Simulate.click(nextPage)
    expect(pagination.state.currentPage).to.equal(currentPage + 1)
  })
  it('Click the next 5 pages, the current page should add 5', function () {
    const pagination = DomReder(Pagination, {total: 500, size: 10})
    const currentPage = pagination.state.currentPage
    const pages = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li')
    const next5Page = pages[pages.length - 3]
    TestUtils.Simulate.click(next5Page)
    expect(pagination.state.currentPage).to.equal(currentPage + 5)
  })

  it('Click the previous page, the current page should reduce 1', function () {
    const pagination = DomReder(Pagination, {total: 500, size: 10})
    const pages = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li')
    const nextPage = pages[pages.length - 1]
    TestUtils.Simulate.click(nextPage)
    const prevPage = pages[0]
    const currentPage = pagination.state.currentPage
    TestUtils.Simulate.click(prevPage)
    expect(pagination.state.currentPage).to.equal(currentPage - 1)
  })

  it('Click the previous 5 pages, the current page should reduce 5', function () {
    const pagination = DomReder(Pagination, {total: 500, size: 10})
    const pages = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li')
    const next5Page = pages[pages.length - 3]
    TestUtils.Simulate.click(next5Page)
    const prev5Page = pages[2]
    const currentPage = pagination.state.currentPage
    TestUtils.Simulate.click(prev5Page)
    expect(pagination.state.currentPage).to.equal(currentPage - 5)
  })

  it('Click a page, the current page should be the page', function () {
    const pagination = DomReder(Pagination, {total: 500, size: 10})
    const pages = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'li')
    TestUtils.Simulate.click(pages[1])
    expect(pagination.state.currentPage).to.equal(1)
    TestUtils.Simulate.click(pages[2])
    expect(pagination.state.currentPage).to.equal(2)
    TestUtils.Simulate.click(pages[5])
    expect(pagination.state.currentPage).to.equal(5)
  })

  it('When input value is valid and Click the jump button, the current page should be the value', function () {
    const pagination = DomReder(Pagination, {total: 500, size: 10})
    const input = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'input')[0]
    const jump = TestUtils.scryRenderedDOMComponentsWithTag(pagination, 'button')[0]
    input.value = 10
    TestUtils.Simulate.change(input)
    TestUtils.Simulate.click(jump)
    expect(pagination.state.currentPage).to.equal(10)
    input.value = 20
    TestUtils.Simulate.change(input)
    TestUtils.Simulate.click(jump)
    expect(pagination.state.currentPage).to.equal(20)
    input.value = 30
    TestUtils.Simulate.change(input)
    TestUtils.Simulate.click(jump)
    expect(pagination.state.currentPage).to.equal(30)
    input.value = 33
    TestUtils.Simulate.change(input)
    TestUtils.Simulate.click(jump)
    expect(pagination.state.currentPage).to.equal(33)
})
