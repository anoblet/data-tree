import "@lion/dialog/lion-dialog.js";
import "@lion/fieldset";
import "@lion/form";
import "@lion/input";
import { html } from "lit-element";
import { nothing } from "lit-html";
import "../create-collection";
import "../document-create";
import "../document-view";

export default function () {
    return html`
        <details>
            <summary>${this.collection.id}</summary>
            <ul>
                ${this.documents
                    ? this.documents.map(
                          (document) =>
                              html`
                                  <li>
                                      <details>
                                          <summary>${document.label}</summary>
                                          <document-view
                                              .document=${document}
                                          ></document-view>
                                      </details>
                                  </li>
                              `
                      )
                    : nothing}
                <li>
                    <button @click=${this.createCollection}>
                        Create Collection
                    </button>
                </li>
                <li>
                    <button @click=${this.createDocument}>
                        Create Document
                    </button>
                </li>
            </ul>
        </details>
        <!-- Create Collection Dialog -->
        <lion-dialog id="create-collection">
            <div slot="content">
                <create-collection></create-collection>
                <button
                    @click=${(e) =>
                        e.target.dispatchEvent(
                            new Event("close-overlay", { bubbles: true })
                        )}
                >
                    x
                </button>
            </div>
        </lion-dialog>
        <!-- Create Document Dialog -->
        <lion-dialog id="create-document">
            <div slot="content">
                <document-create></document-create>
                <button
                    @click=${(e) =>
                        e.target.dispatchEvent(
                            new Event("close-overlay", { bubbles: true })
                        )}
                >
                    x
                </button>
            </div>
        </lion-dialog>
    `;
}

export const addDialog = function () {
    return html`
        <lion-dialog>
            <div slot="content">
                <document-create></document-create>
                <button
                    @click=${(e) =>
                        e.target.dispatchEvent(
                            new Event("close-overlay", { bubbles: true })
                        )}
                >
                    x
                </button>
            </div>
        </lion-dialog>
    `;
};
