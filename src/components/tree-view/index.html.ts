import { html } from "lit-element";
import { nothing } from "lit-html";
import "../collection-view";

export default function () {
    return html`
        <details open>
            <summary></summary>
            <ul>
                ${this.collections
                    ? this.collections.map(
                          (collection) =>
                              html`<li>
                                  <collection-view
                                      .collection=${collection}
                                  ></collection-view>
                              </li> `
                      )
                    : nothing}
            </ul>
        </details>
    `;
}
