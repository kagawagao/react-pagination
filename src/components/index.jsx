import React, {PropTypes} from 'react'
import Pager from './pager'
import autobind from 'autobind-decorator'

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
    const {currentPage = 1, total, size, locale = {
      next_5: 'Next 5 pages',
      prev_5: 'Previous 5 pages',
      last_page: 'Last Page',
      next_page: 'Next page',
      prev_page: 'Previous page'
    }} = props
    const pages = Math.ceil(total / size)
    this.state = {
      currentPage,
      pages,
      locale
    }
  }

  @autobind
  handlePageChange (currentPage) {
    let page
    if (typeof currentPage === 'number') {
      page = currentPage
    } else if (currentPage === 'next') {
      page = this.state.currentPage + 1
    } else if (currentPage === 'prev') {
      page = this.state.currentPage - 1
    } else if (currentPage === 'next_5') {
      page = this.state.currentPage + 5
    } else if (currentPage === 'prev_5') {
      page = this.state.currentPage - 5
    }
    this.props.onPageChange(page)
    this.setState({
      ...this.state, currentPage: page
    })
  }
  render () {
    const {currentPage, pages, locale} = this.state
    // const realPageArray = []
    // for (let i = 0; i < pages; i++) {
    //   realPageArray.push(i + 1)
    // }
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
    } else if (pages > 10 && currentPage >= pages - 5) {
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
      <ul className={`${classPrefix}-pagination`}>
        <li title={locale.prev_page} onClick={currentPage !== 1 ? this.handlePageChange.bind(this, 'prev') : false} className={prevClassName}><span>{'<'}</span></li>
        {showPageArray.map((page, index) => <Pager key={index} page={page} currentPage={currentPage} classPrefix={`${classPrefix}-pagination`} handlePageChange={this.handlePageChange}/>)}
        <li title={locale.next_page} onClick={currentPage !== pages ? this.handlePageChange.bind(this, 'next') : false} className={nextClassName}><span>{'>'}</span></li>
      </ul>
    )
  }
}
