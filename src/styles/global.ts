import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root{
        --white:#fff;
        --backgroud: #f2f3f5;
        --gray-line: #DCDDE0;
        --text: #666666;
        --text-highlight: #B3b9ff;
        --title:#2e384d;
        --red: #e83f5b;
        --green: #4cd62b;
        --blue: #5965E0;
        --blue-dark: #4953b8;
        --blue-twitter: #2aa9e0;
    }

    // smaller screen
    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
        // smaller screen
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(---backgroud);
        color: var(---text);
    }

    body , input , textarea , button {
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;

export const Container = styled.div`
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;


    display: flex;
    flex-direction: column;

`;