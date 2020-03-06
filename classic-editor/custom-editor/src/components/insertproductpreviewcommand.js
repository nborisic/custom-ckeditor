import Command from "@ckeditor/ckeditor5-core/src/command";

export default class InsertProductPreviewCommand extends Command {
  execute(id) {
    console.log('okida');
    console.log(id);


    this.editor.model.change(writer => {
      console.log(writer);

      // Insert <productPreview id="...">*</productPreview> at the current selection position
      // in a way which will result in creating a valid model structure.
      this.editor.model.insertContent(
        writer.createElement("productPreview", { id })
      );
    });
  }

  refresh() {
    console.log('refresh');

    const model = this.editor.model;
    const selection = model.document.selection;
    console.log(selection);
    console.log(selection.getFirstPosition());


    // const allowedIn = model.schema.findAllowedParent(
    //   selection.getFirstPosition(),
    //   "productPreview"
    // );
    this.isEnabled = true;
    // this.isEnabled = allowedIn !== null;
  }
}
