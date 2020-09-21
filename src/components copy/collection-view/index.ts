import { customElement, LitElement, property } from "lit-element";
import style from "./index.css";
import template from "./index.html";
import { getCollections, getDocuments } from "../../firebase";

@customElement("collection-view")
export class CollectionTreeComponent extends LitElement {
    @property({ type: Array }) collections: [];
    @property({ type: Array }) documents: any[];
    @property({ type: String }) path: string = undefined;

    public static get styles() {
        return style;
    }

    public render = template.bind(this);

    connectedCallback() {
        super.connectedCallback();
        // this.getCollections();
        this.getDocuments();
    }

    async getCollections() {
        this.collections = await getCollections(this.path);
    }

    async getDocuments() {
        await getDocuments(
            this.path,
            (documents: any[]) => (this.documents = documents)
        );
    }
}
