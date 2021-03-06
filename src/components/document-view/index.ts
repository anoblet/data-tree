import { customElement, LitElement, property } from "lit-element";
import style from "./index.css";
import template from "./index.html";
import { getCollections, getDocuments } from "../../firebase";

@customElement("document-view")
export class DocumentViewComponent extends LitElement {
    @property() collections: any;
    @property() document: any;

    public static get styles() {
        return style;
    }

    public render = template.bind(this);

    connectedCallback() {
        super.connectedCallback();
        console.log(this.document);
        this.getCollections();
    }

    async getCollections() {
        this.collections = await getCollections();
    }
}
