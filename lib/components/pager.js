'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pager = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(Pager, _React$Component);

  function Pager() {
    (0, _classCallCheck3.default)(this, Pager);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Pager).apply(this, arguments));
  }

  (0, _createClass3.default)(Pager, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var page = _props.page;
      var classPrefix = _props.classPrefix;
      var currentPage = _props.currentPage;

      var className = page.name !== currentPage ? classPrefix + '-pager' : classPrefix + '-pager ' + classPrefix + '-pager-active';
      return _react2.default.createElement(
        'li',
        { title: page.alt, className: className, onClick: this.props.handlePageChange.bind(this, page.name) },
        _react2.default.createElement(
          'span',
          null,
          page.text
        )
      );
    }
  }]);
  return Pager;
}(_react2.default.Component), _class.propTypes = {
  page: _react.PropTypes.object,
  classPrefix: _react.PropTypes.string,
  handlePageChange: _react.PropTypes.func,
  currentPage: _react.PropTypes.number
}, _temp);
exports.default = Pager;
module.exports = exports['default'];