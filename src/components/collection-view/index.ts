import { customElement, LitElement, property, query } from "lit-element";
import style from "./index.css";
import template from "./index.html";
import { getDocuments } from "../../firebase";

@customElement("collection-view")
export class CollectionTreeComponent extends LitElement {
    @property() collection: any;
    @property({ type: Array }) documents: any[];
    @query("#create-collection") createCollectionDialog;
    @query("#create-document") createDocumentDialog;

    public static get styles() {
        return style;
    }

    public render = template.bind(this);

    connectedCallback() {
        super.connectedCallback();
        console.log(this.collection);
        this.getDocuments();
    }

    async createCollection() {
        this.createCollectionDialog.opened = true;
    }

    async createDocument() {
        this.createDocumentDialog.opened = true;
    }

    async getDocuments() {
        await getDocuments(this.collection.path, (documents: any[]) => {
            console.log(documents);
            this.documents = documents;
        });
    }
}
