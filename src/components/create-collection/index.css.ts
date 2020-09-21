import { css } from "lit-element";

export default css`
    :host {
        background: #fff;
        border: 1px solid #000;
        display: block;
        padding: 1rem;
    }

    li {
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
    }

    #title {
        display: inline-block;
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;
