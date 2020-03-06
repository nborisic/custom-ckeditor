"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ckeditor5React = _interopRequireDefault(require("@ckeditor/ckeditor5-react"));

var _classiceditor = _interopRequireDefault(require("@ckeditor/ckeditor5-editor-classic/src/classiceditor"));

var _essentials = _interopRequireDefault(require("@ckeditor/ckeditor5-essentials/src/essentials"));

var _heading = _interopRequireDefault(require("@ckeditor/ckeditor5-heading/src/heading"));

var _bold = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/bold"));

var _italic = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/italic"));

var _underline = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/underline"));

var _link = _interopRequireDefault(require("@ckeditor/ckeditor5-link/src/link"));

var _table = _interopRequireDefault(require("@ckeditor/ckeditor5-table/src/table"));

var _tabletoolbar = _interopRequireDefault(require("@ckeditor/ckeditor5-table/src/tabletoolbar"));

var _paragraph = _interopRequireDefault(require("@ckeditor/ckeditor5-paragraph/src/paragraph"));

var _productpreviewediting = _interopRequireDefault(require("./productpreviewediting"));

var _productlist = _interopRequireDefault(require("./Products/productlist"));

var _productpreview = _interopRequireDefault(require("./Products/productpreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var products = [{
  id: 1,
  name: "Colors of summer in Poland",
  price: "$1500",
  image: "product1.jpg"
}, {
  id: 2,
  name: "Mediterranean sun on Malta",
  price: "$1899",
  image: "product2.jpg"
}, {
  id: 3,
  name: "Tastes of Asia",
  price: "$2599",
  image: "product3.jpg"
}, {
  id: 4,
  name: "Exotic India",
  price: "$2200",
  image: "product4.jpg"
}]; // The React application class. It renders the editor and the product list.

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props)); // A place to store the reference to the editor instance created by the <CKEditor> component.
    // The editor instance is created asynchronously and is only available when the editor is ready.

    _defineProperty(_assertThisInitialized(_this), "handleEditorDataChange", function (evt, editor) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name; // onChange({ target: { name, value: editor.getData() } });

      _this.setState({
        editorData: editor.getData()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditorInit", function (editor) {
      _this.editor = editor; // this.editor.addCommand("mySimpleCommand", { // create named command
      //   exec: function(edt) {
      //       alert(edt.getData());
      //   }
      // });
      //   this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      //     label: "Click me",
      //     command: () => { console.log('rbbb')},
      //     toolbar: 'insert',
      //     icon: 'https://avatars1.githubusercontent.com/u/5500999?v=2&s=16'
      // });

      _this.setState({
        editorData: editor.getData()
      }); // CKEditor 5 inspector allows you to take a peek into the editor's model and view
      // data layers. Use it to debug the application and learn more about the editor.
      // CKEditorInspector.attach( editor );

    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var iframeName = e.target.value;
      console.log(iframeName); // const iframe = '<iframe width="500" height="400" src="https://www.youtube.com/embed/VAHq-ai_QXQ"></iframe>';
      // const iframe = '<div><iframe width="500" height="400" src="https://www.youtube.com/embed/VAHq-ai_QXQ"></iframe></div>'

      var iframe = '<section class="product" data-id="2"></section>';

      _this.editor.setData(_this.state.editorData + iframe);
    });

    _this.editor = null;
    _this.state = {
      // The initial editor data. It is bound to the editor instance and will change as
      // the user types and modifies the content of the editor.
      editorData: '<h2>Check our last minute deals!</h2><p>The capital city of <a href="https://en.wikipedia.org/wiki/Malta">Malta</a> is the top destination this summer. It’s home to a cutting-edge contemporary architecture, baroque masterpieces, delicious local cuisine and at least 8 months of sun.</p><section class="product" data-id="2"></section><p>You’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw">Warsaw</a>! Best time to visit the city is July and August, when it’s cool enough to not break a sweat and hot enough to enjoy summer. The city which has quite a combination of both old and modern textures is located by the river Vistula.</p><section class="product" data-id="1"></section><h3>Other destinations</h3><figure class="table"><table><thead><tr><th>Destination</th><th>Trip details</th></tr></thead><tbody><tr><td><section class="product" data-id="3"></section><p>&nbsp;</p></td><td>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid. <a href="http://ckeditor.com">Find out more...</a></td></tr><tr><td><section class="product" data-id="4"></section><p>&nbsp;</p></td><td>Tourists frequently admit that Taj Mahal "simply cannot be described with words". And that’s probably true. The more you try the more speechless you become. Words give only a semblance of truth. <a href="http://ckeditor.com">Find out more...</a></td></tr></tbody></table></figure>'
    }; // The configuration of the <CKEditor> instance.

    _this.editorConfig = {
      plugins: [// A set of editor features to be enabled and made available to the user.
      _essentials["default"], _heading["default"], _bold["default"], _italic["default"], _underline["default"], _link["default"], _paragraph["default"], _table["default"], _tabletoolbar["default"], // Your custom plugin implementing the widget is loaded here.
      _productpreviewediting["default"]],
      toolbar: ["heading", "|", "bold", "italic", "underline", "|", "link", "insertTable", "|", "undo", "redo", "|", "insertProduct"],
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
      },
      // The configuration of the Products plugin. It specifies a function that will allow
      // the editor to render a React <ProductPreview> component inside a product widget.
      products: {
        productRenderer: function productRenderer(id, domElement) {
          var product = products.find(function (product) {
            return product.id === id;
          });

          _reactDom["default"].render(_react["default"].createElement(_productpreview["default"], _extends({
            id: id
          }, product)), domElement);
        }
      }
    };
    return _this;
  } // A handler executed when the user types or modifies the editor content.
  // It updates the state of the application.
  // handleEditorDataChange = (evt, editor) => {
  //   this.setState({
  //     editorData: editor.getData()
  //   });
  // }


  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return [// The application renders two columns:
      // * in the left one, the <CKEditor> and the textarea displaying live
      //   editor data are rendered.
      // * in the right column, a <ProductList> is rendered with available <ProductPreviews>
      //   to choose from.
      _react["default"].createElement("div", {
        className: "app__offer-editor",
        key: "offer-editor"
      }, _react["default"].createElement("h3", null, "Product offer editor"), _react["default"].createElement("select", {
        name: "pets",
        id: "pet-select",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        }
      }, _react["default"].createElement("option", {
        value: ""
      }, "--Please choose an option--"), _react["default"].createElement("option", {
        value: "dog"
      }, "Dog"), _react["default"].createElement("option", {
        value: "cat"
      }, "Cat"), _react["default"].createElement("option", {
        value: "hamster"
      }, "Hamster"), _react["default"].createElement("option", {
        value: "parrot"
      }, "Parrot"), _react["default"].createElement("option", {
        value: "spider"
      }, "Spider"), _react["default"].createElement("option", {
        value: "goldfish"
      }, "Goldfish")), _react["default"].createElement(_ckeditor5React["default"], {
        editor: _classiceditor["default"],
        data: this.state.editorData,
        config: this.editorConfig,
        onChange: this.handleEditorDataChange,
        onInit: this.handleEditorInit
      }), _react["default"].createElement("h3", null, "Editor data"), _react["default"].createElement("textarea", {
        value: this.state.editorData,
        readOnly: true
      })), _react["default"].createElement(_productlist["default"], {
        key: "product-list",
        products: products,
        onClick: function onClick(id) {
          _this2.editor.execute("insertProduct", id);

          _this2.editor.editing.view.focus();
        }
      })];
    }
  }]);

  return Form;
}(_react["default"].Component);

exports["default"] = Form;