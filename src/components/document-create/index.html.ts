import { html } from "lit-element";

export default function () {
    return html`
        <span id="title">Create Document</span>
        <form>
            <ul>
                ${this.fields.map(
                    (field) => html`
                        <li>
                            <select>
                                <option>Title</option>
                                <option>Description</option>
                            </select>
                            <input type="text" />
                        </li>
                    `
                )}
                <li><button @click=${this.addField}>Add field</button></li>
            </ul>
        </form>
    `;
}
