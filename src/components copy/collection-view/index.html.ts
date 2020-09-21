import { html } from "lit-element";
import { nothing } from "lit-html";

export default function () {
    return html`
        <details>
            <summary>Collections</summary>
            <ul>
                ${false
                    ? this.collections
                        ? this.collections.map(
                              (collection) =>
                                  html`
                                      <li>
                                          <details>
                                              <summary>
                                                  ${collection.id}
                                              </summary>
                                              <collection-view
                                                  path=${collection.path}
                                              ></collection-view>
                                          </details>
                                      </li>
                                  `
                          )
                        : nothing
                    : nothing}
                ${this.documents
                    ? this.documents.map((document) => html`${document.title}`)
                    : nothing}
            </ul>
        </details>
    `;
}
