import React, {PropTypes} from 'react'
import Pager from './pager'
import autobind from 'autobind-decorator'
function noop () {

}
export default class Pagination extends React.Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func,
    locale: PropTypes.object
  }

  constructor (props) {
    super(props)
    const {currentPage, total, size, locale = {
      next_5: 'Next 5 pages',
      prev_5: 'Previous 5 pages',
      last_page: 'Last Page',
      next_page: 'Next page',
      prev_page: 'Previous page',
      jump: 'Jump'
    }} = props
    const hasPageChange = props.onPageChange !== noop
    const pages = Math.ceil(total / size)
    this.state = {
      currentPage: currentPage || 1,
      pages,
      locale,
      disabled: true
    }
  }

  @autobind
  handlePageChange (currentPage) {
    let page
    if (currentPage === 'prev_5') {
      page = this.state.currentPage - 5
    } else if (currentPage === 'next') {
      page = this.state.currentPage + 1
    } else if (currentPage === 'prev') {
      page = this.state.currentPage - 1
    } else if (currentPage === 'next_5') {
      page = this.state.currentPage + 5
    } else {
      page = currentPage
    }
    if (typeof this.props.onPageChange === 'function') {
      this.props.onPageChange(page)
    }
    this.setState({
      ...this.state, currentPage: page
    })
  }

  @autobind
  handleInput (e) {
    const value = +e.target.value
    this.setState({
      ...this.state,
      jumpPage: value,
      disabled: !(typeof value === 'number' && value > 0 && value <= this.state.pages)
    })
  }

  @autobind
  handeClick () {
    const {jumpPage, pages} = this.state
    this.handlePageChange(jumpPage)
  }
  render () {
    const {currentPage, pages, locale, disabled} = this.state
    const showPageArray = []
    const lastPage = {
      text: pages,
      alt: `${locale.last_page}:${pages}`,
      name: pages
    }
    const firstPage = {
      text: 1,
      alt: 1,
      name: 1
    }
    const nextFivePages = {
      text: '>>>',
      alt: locale.next_5,
      name: 'next_5'
    }
    const prevFivePages = {
      text: '<<<',
      alt: locale.prev_5,
      name: 'prev_5'
    }
    const generatePageObject = i => ({
      text: i,
      alt: i,
      name: i
    })

    if (pages > 10 && currentPage < 5) {
      for (let i = 1; i < 6; i++) {
        showPageArray.push(generatePageObject(i))
      }
      showPageArray.push(nextFivePages)
      showPageArray.push(lastPage)
    } else if (pages > 10 && currentPage >= 5 && currentPage < pages - 5) {
      showPageArray.push(firstPage)
      showPageArray.push(prevFivePages)
      for (let i = currentPage; i < currentPage + 5; i++) {
        showPageArray.push(generatePageObject(i))
      }
      showPageArray.push(nextFivePages)
      showPageArray.push(lastPage)
    } else {
      showPageArray.push(firstPage)
      showPageArray.push(prevFivePages)
      for (let i = pages - 5; i < pages; i++) {
        showPageArray.push(generatePageObject(i))
      }
      showPageArray.push(lastPage)
    }
    const classPrefix = 'nd'
    const nextClassName = currentPage !== pages ? `${classPrefix}-pagination-pager` : `${classPrefix}-pagination-pager ${classPrefix}-pagination-pager-disabled`
    const prevClassName = currentPage !== 1 ? `${classPrefix}-pagination-pager` : `${classPrefix}-pagination-pager ${classPrefix}-pagination-pager-disabled`
    return (
      <div className={`${classPrefix}-pagination`}>
        <ul className={`${classPrefix}-pagination-pages`}>
          <li title={locale.prev_page} onClick={currentPage !== 1 ? this.handlePageChange.bind(this, 'prev') : false} className={prevClassName}><span>{'<'}</span></li>
          {showPageArray.map((page, index) => <Pager key={index} page={page} currentPage={currentPage} classPrefix={`${classPrefix}-pagination`} handlePageChange={this.handlePageChange}/>)}
          <li title={locale.next_page} onClick={currentPage !== pages ? this.handlePageChange.bind(this, 'next') : false} className={nextClassName}><span>{'>'}</span></li>
        </ul>
        <input onChange={this.handleInput} className={`${classPrefix}-pagination-jump`}/>
        <button disabled={disabled} onClick={this.handeClick.bind(this)} className={disabled ? `${classPrefix}-pagination-button ${classPrefix}-pagination-button-disabled` : `${classPrefix}-pagination-button`}>{locale.jump}</button>
      </div>
    )
  }
}
