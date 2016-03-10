# react-pagination

[![Build Status](https://travis-ci.org/kagawagao/react-pagination.svg?branch=master)](https://travis-ci.org/kagawagao/react-pagination)
[![Coverage Status](https://coveralls.io/repos/github/kagawagao/react-pagination/badge.svg?branch=master)](https://coveralls.io/github/kagawagao/react-pagination?branch=master)
[![npm](https://img.shields.io/npm/v/nd-rc-pagination.svg)](https://npmjs.org/package/nd-rc-pagination)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-pagination/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-pagination/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-pagination/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-pagination/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/kagawagao/react-pagination/badges/code.svg)](https://www.bithound.io/github/kagawagao/react-pagination)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-pagination/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-pagination/master/dependencies/npm)
[![bitHound Overall Score](https://www.bithound.io/github/kagawagao/react-pagination/badges/score.svg)](https://www.bithound.io/github/kagawagao/react-pagination)

React UI Component - Pagination
## Install
```
$ npm install nd-rc-pagination --save
```
## Use
```jsx
import React from 'react'
import Pagination from 'nd-rc-pagination'
import 'nd-rc-pagination/assets/index.scss'
export default class extends React.Component {

  handlePageChange (page) {
    console.log(page)
  }
  render () {
    const locale = {
      next_5: 'Next 5 pages',
      prev_5: 'Previous 5 pages',
      last_page: 'Last Page',
      next_page: 'Next page',
      prev_page: 'Previous page',
      jump: 'Jump'
    }
    return (
      <Pagination total={500} size={10} onPageChange={this.handlePageChange} locale={locale}/>
    )
  }
}
```
