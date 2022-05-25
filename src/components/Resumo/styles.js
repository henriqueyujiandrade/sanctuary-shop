import styled from 'styled-components'

export const ContainerResumo = styled.div`
        
        width: 20vw;
        background: rgb(255, 255, 255, 0.4);
        height: 40vh;
        border-radius: 1vw;
        box-shadow: 0px 0px 1vw 0px rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 150px;

        h2{
            margin-bottom: 3vh;
            font-size: 2vw;
        }

        button{
                width: 10vw;
                font-size: 2vw ;
                font-family: 'Nunito', sans-serif;
                background: rgb(255, 255, 255, 0.6);
                border: 0.1vw solid yellow;
                color: purple;
                font-weight: bold;
                border-radius: 0.5vw;
                transition: 0.5s;

                :hover{
                    cursor: pointer;
                    box-shadow: 0px 0px 10px 0px yellow; 

                }

                :active{
                    box-shadow: 0px 0px 10px 0px yellow; 
                }
                
            }

            @media (min-width: 768px){
                button{
                    width: 5vw;
                    font-size: 1vw;
                }
            }

`

export const TotalQtd = styled.div`
        display: flex;
        flex-direction: column;        
        width: 18vw;

        p{
            margin-bottom: 3vh;
            font-size: 1.5vw;
        }

        
`
