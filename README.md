[![Build Status](https://travis-ci.org/kagawagao/react-pagination.svg?branch=master)](https://travis-ci.org/kagawagao/react-pagination)
[![npm](https://img.shields.io/npm/v/nd-rc-pagination.svg)](https://npmjs.org/package/nd-rc-pagination)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-pagination/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-pagination/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-pagination/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-pagination/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/kagawagao/react-pagination/badges/code.svg)](https://www.bithound.io/github/kagawagao/react-pagination)
[![bitHound Dev Dependencies](https://www.bithound.io/github/kagawagao/react-pagination/badges/devDependencies.svg)](https://www.bithound.io/github/kagawagao/react-pagination/master/dependencies/npm)
# react-pagination
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
    return (
      <Pagination total={500} size={10} onPageChange={this.handlePageChange}/>
    )
  }
}
```
