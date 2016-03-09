import React from 'react'
import Pagination from 'nd-rc-pagination'
import 'nd-rc-pagination/assets/index.scss'
export default class extends React.Component {

  handlePageChange (page) {
    console.log(page)
  }
  render () {
    return (
      <Pagination total={500} size={10} onPageChange={this.handlePageChange}/>
    )
  }
}
