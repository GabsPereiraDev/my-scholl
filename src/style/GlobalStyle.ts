import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --background:#f0f2f5;
    --yellow:#DBF227;
    --blue:#0d306a;
    --blue300:#051f4a;
    --green:#005C53;
    --green300:#9FC131;
    --text-title:#363f5f;
    --text-body:#969cb3;
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
       
    }

    a {
        text-decoration: none;
        color: white;
    }

    body {
        font-family: "Poppins", sans-serif;
        background: #F5F5F5;
        color: #212121;
    }

    @media(max-width: 1400px) {
    html {
        font-size: 85%;
        }
    }
    @media(max-width: 720px) {
        html {
            font-size: 55%;
        }
    }
    

    button {
        cursor: pointer;

        border: none;
        border-radius: 0.25rem;

        color: #fff;
    }

    .react-modal-overlay {
        background: rgba(0,0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
        border: none;
    }
`;