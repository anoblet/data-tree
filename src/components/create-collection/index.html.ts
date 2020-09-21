import { html } from "lit-element";

export default function () {
    return html`
        <span id="title">Create Collection</span>
        <form>
            <ul>
                <li><label>ID:</label><input type="text" /></li>
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
