import React, {PropTypes} from 'react'

export default class Pager extends React.Component {
  static propTypes = {
    page: PropTypes.object,
    classPrefix: PropTypes.string,
    handlePageChange: PropTypes.func,
    currentPage: PropTypes.number
  }
  render () {
    const {page, classPrefix, currentPage} = this.props
    const className = page.name !== currentPage ? `${classPrefix}-pager` : `${classPrefix}-pager ${classPrefix}-pager-active`
    return (
      <li className={className} onClick={this.props.handlePageChange.bind(this, page.name)} >
        <span alt={page.alt}>{page.text}</span>
      </li>
    )
  }
}
