import { customElement, LitElement, property } from "lit-element";
import style from "./index.css";
import template from "./index.html";
import { getCollections } from "../../firebase";

@customElement("tree-view")
export class TreeViewComponent extends LitElement {
    @property({ type: Array }) collections: [];

    public static get styles() {
        return style;
    }

    public render = template.bind(this);

    connectedCallback() {
        super.connectedCallback();
        this.getCollections();
    }

    async getCollections() {
        this.collections = await getCollections();
    }
}
