'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pager = require('./pager');

var _pager2 = _interopRequireDefault(_pager);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Pagination = (_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Pagination, _React$Component);

  function Pagination(props) {
    (0, _classCallCheck3.default)(this, Pagination);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Pagination).call(this, props));

    var _props$currentPage = props.currentPage;
    var currentPage = _props$currentPage === undefined ? 1 : _props$currentPage;
    var total = props.total;
    var size = props.size;
    var _props$locale = props.locale;
    var locale = _props$locale === undefined ? {
      next_5: 'Next 5 pages',
      prev_5: 'Previous 5 pages',
      last_page: 'Last Page',
      next_page: 'Next page',
      prev_page: 'Previous page'
    } : _props$locale;

    var pages = Math.ceil(total / size);
    _this.state = {
      currentPage: currentPage,
      pages: pages,
      locale: locale
    };
    return _this;
  }

  (0, _createClass3.default)(Pagination, [{
    key: 'handlePageChange',
    value: function handlePageChange(currentPage) {
      var page = undefined;
      if (typeof currentPage === 'number') {
        page = currentPage;
      } else if (currentPage === 'next') {
        page = this.state.currentPage + 1;
      } else if (currentPage === 'prev') {
        page = this.state.currentPage - 1;
      } else if (currentPage === 'next_5') {
        page = this.state.currentPage + 5;
      } else if (currentPage === 'prev_5') {
        page = this.state.currentPage - 5;
      }
      this.props.onPageChange(page);
      this.setState((0, _extends3.default)({}, this.state, { currentPage: page
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var currentPage = _state.currentPage;
      var pages = _state.pages;
      var locale = _state.locale;
      // const realPageArray = []
      // for (let i = 0; i < pages; i++) {
      //   realPageArray.push(i + 1)
      // }

      var showPageArray = [];
      var lastPage = {
        text: pages,
        alt: locale.last_page + ':' + pages,
        name: pages
      };
      var firstPage = {
        text: 1,
        alt: 1,
        name: 1
      };
      var nextFivePages = {
        text: '>>>',
        alt: locale.next_5,
        name: 'next_5'
      };
      var prevFivePages = {
        text: '<<<',
        alt: locale.prev_5,
        name: 'prev_5'
      };
      var generatePageObject = function generatePageObject(i) {
        return {
          text: i,
          alt: i,
          name: i
        };
      };

      if (pages > 10 && currentPage < 5) {
        for (var i = 1; i < 6; i++) {
          showPageArray.push(generatePageObject(i));
        }
        showPageArray.push(nextFivePages);
        showPageArray.push(lastPage);
      } else if (pages > 10 && currentPage >= 5 && currentPage < pages - 5) {
        showPageArray.push(firstPage);
        showPageArray.push(prevFivePages);
        for (var _i = currentPage; _i < currentPage + 5; _i++) {
          showPageArray.push(generatePageObject(_i));
        }
        showPageArray.push(nextFivePages);
        showPageArray.push(lastPage);
      } else if (pages > 10 && currentPage >= pages - 5) {
        showPageArray.push(firstPage);
        showPageArray.push(prevFivePages);
        for (var _i2 = pages - 5; _i2 < pages; _i2++) {
          showPageArray.push(generatePageObject(_i2));
        }
        showPageArray.push(lastPage);
      }
      var classPrefix = 'nd';
      var nextClassName = currentPage !== pages ? classPrefix + '-pagination-pager' : classPrefix + '-pagination-pager ' + classPrefix + '-pagination-pager-disabled';
      var prevClassName = currentPage !== 1 ? classPrefix + '-pagination-pager' : classPrefix + '-pagination-pager ' + classPrefix + '-pagination-pager-disabled';
      return _react2.default.createElement(
        'ul',
        { className: classPrefix + '-pagination' },
        _react2.default.createElement(
          'li',
          { title: locale.prev_page, onClick: currentPage !== 1 ? this.handlePageChange.bind(this, 'prev') : false, className: prevClassName },
          _react2.default.createElement(
            'span',
            null,
            '<'
          )
        ),
        showPageArray.map(function (page, index) {
          return _react2.default.createElement(_pager2.default, { key: index, page: page, currentPage: currentPage, classPrefix: classPrefix + '-pagination', handlePageChange: _this2.handlePageChange });
        }),
        _react2.default.createElement(
          'li',
          { title: locale.next_page, onClick: currentPage !== pages ? this.handlePageChange.bind(this, 'next') : false, className: nextClassName },
          _react2.default.createElement(
            'span',
            null,
            '>'
          )
        )
      );
    }
  }]);
  return Pagination;
}(_react2.default.Component), _class2.propTypes = {
  total: _react.PropTypes.number.isRequired,
  size: _react.PropTypes.number.isRequired,
  currentPage: _react.PropTypes.number,
  onPageChange: _react.PropTypes.func,
  locale: _react.PropTypes.object
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'handlePageChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handlePageChange'), _class.prototype)), _class);
exports.default = Pagination;
module.exports = exports['default'];