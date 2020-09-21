import { customElement, LitElement, property } from "lit-element";
import style from "./index.css";
import template from "./index.html";

@customElement("document-create")
export class DocumentCreateComponent extends LitElement {
    @property({ type: Array }) fields: any[] = [{}];

    public static get styles() {
        return style;
    }

    public render = template.bind(this);

    addField(event) {
        event.preventDefault();
        this.fields = [...this.fields, {}];
    }
}
