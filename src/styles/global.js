import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
          * {
            margin: 0;
            padding: 0;
            box-sizing:border-box;
            outline:0
                 }
        body{
            background: url('https://i.pinimg.com/736x/26/43/71/2643716e25dd069f6bbe7e805b22ae61.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            height: 100vh;
            width: 100vw;
            font-family: 'Nunito', sans-serif;
            color: yellow;
        }

        a{
          text-decoration:none;
          color: inherit;
        }
`

export default GlobalStyle