// Imports necessary to run a React application.
import React from "react";
import ReactDOM from "react-dom";

// The official <CKEditor> component for React.
import CKEditor from "@ckeditor/ckeditor5-react";

// The official CKEditor 5 instance inspector. It helps understand the editor view and model.
// import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

// The base editor class and features required to run the editor.
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Link from "@ckeditor/ckeditor5-link/src/link";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";

// CKEditor plugin implementing a product widget to be used in the editor content.
import ProductPreviewEditing from "./productpreviewediting";

// React components to render the list of products and the product preview.
import ProductList from "./Products/productlist";
import ProductPreview from "./Products/productpreview";

const products = [
  {
    id: 1,
    name: "Colors of summer in Poland",
    price: "$1500",
    image: "product1.jpg"
  },
  {
    id: 2,
    name: "Mediterranean sun on Malta",
    price: "$1899",
    image: "product2.jpg"
  },
  {
    id: 3,
    name: "Tastes of Asia",
    price: "$2599",
    image: "product3.jpg"
  },
  {
    id: 4,
    name: "Exotic India",
    price: "$2200",
    image: "product4.jpg"
  }
];

// The React application class. It renders the editor and the product list.
export default class Form extends React.Component {
  constructor(props) {
    super(props);

    // A place to store the reference to the editor instance created by the <CKEditor> component.
    // The editor instance is created asynchronously and is only available when the editor is ready.
    this.editor = null;

    this.state = {
      // The initial editor data. It is bound to the editor instance and will change as
      // the user types and modifies the content of the editor.
      editorData:
        '<h2>Check our last minute deals!</h2><p>The capital city of <a href="https://en.wikipedia.org/wiki/Malta">Malta</a> is the top destination this summer. It’s home to a cutting-edge contemporary architecture, baroque masterpieces, delicious local cuisine and at least 8 months of sun.</p><section class="product" data-id="2"></section><p>You’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw">Warsaw</a>! Best time to visit the city is July and August, when it’s cool enough to not break a sweat and hot enough to enjoy summer. The city which has quite a combination of both old and modern textures is located by the river Vistula.</p><section class="product" data-id="1"></section><h3>Other destinations</h3><figure class="table"><table><thead><tr><th>Destination</th><th>Trip details</th></tr></thead><tbody><tr><td><section class="product" data-id="3"></section><p>&nbsp;</p></td><td>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid. <a href="http://ckeditor.com">Find out more...</a></td></tr><tr><td><section class="product" data-id="4"></section><p>&nbsp;</p></td><td>Tourists frequently admit that Taj Mahal "simply cannot be described with words". And that’s probably true. The more you try the more speechless you become. Words give only a semblance of truth. <a href="http://ckeditor.com">Find out more...</a></td></tr></tbody></table></figure>'
    };

    // The configuration of the <CKEditor> instance.
    this.editorConfig = {
      plugins: [
        // A set of editor features to be enabled and made available to the user.
        Essentials,
        Heading,
        Bold,
        Italic,
        Underline,
        Link,
        Paragraph,
        Table,
        TableToolbar,

        // Your custom plugin implementing the widget is loaded here.
        ProductPreviewEditing
      ],
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertTable",
        "|",
        "undo",
        "redo",
        "|",
        "insertProduct"
      ],
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
      },
      // The configuration of the Products plugin. It specifies a function that will allow
      // the editor to render a React <ProductPreview> component inside a product widget.
      products: {
        productRenderer: (id, domElement) => {
          const product = products.find(product => product.id === id);

          ReactDOM.render(<ProductPreview id={id} {...product} />, domElement);
        }
      }
    };
  }

  // A handler executed when the user types or modifies the editor content.
  // It updates the state of the application.
  // handleEditorDataChange = (evt, editor) => {
  //   this.setState({
  //     editorData: editor.getData()
  //   });
  // }
  handleEditorDataChange = (evt, editor) => {
    const { onChange, name } = this.props;

    // onChange({ target: { name, value: editor.getData() } });
    this.setState({
      editorData: editor.getData()
    });
  }

  // A handler executed when the editor has been initialized and is ready.
  // It synchronizes the initial data state and saves the reference to the editor instance.
  handleEditorInit = (editor) => {
    this.editor = editor;


    // this.editor.addCommand("mySimpleCommand", { // create named command
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

    this.setState({
      editorData: editor.getData()
    });

    // CKEditor 5 inspector allows you to take a peek into the editor's model and view
    // data layers. Use it to debug the application and learn more about the editor.
    // CKEditorInspector.attach( editor );
  }

  handleChange = (e) => {
    const iframeName = e.target.value;
    console.log(iframeName);


    // const iframe = '<iframe width="500" height="400" src="https://www.youtube.com/embed/VAHq-ai_QXQ"></iframe>';
    // const iframe = '<div><iframe width="500" height="400" src="https://www.youtube.com/embed/VAHq-ai_QXQ"></iframe></div>'

    const iframe = '<section class="product" data-id="2"></section>'

    this.editor.setData(this.state.editorData + iframe)
  }

  render() {
    return [
      // The application renders two columns:
      // * in the left one, the <CKEditor> and the textarea displaying live
      //   editor data are rendered.
      // * in the right column, a <ProductList> is rendered with available <ProductPreviews>
      //   to choose from.
      <div className="app__offer-editor" key="offer-editor">
        <h3>Product offer editor</h3>
        <select name="pets" id="pet-select" onChange={(e) => this.handleChange(e)}>
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <CKEditor
          editor={ClassicEditor}
          data={this.state.editorData}
          config={this.editorConfig}
          onChange={this.handleEditorDataChange}
          onInit={this.handleEditorInit}
        />

        <h3>Editor data</h3>
        <textarea value={this.state.editorData} readOnly={true}></textarea>
      </div>,
      <ProductList
        key="product-list"
        products={products}
        onClick={id => {
          this.editor.execute("insertProduct", id);
          this.editor.editing.view.focus();
        }}
      />
    ];
  }
}
