import styled from 'styled-components'

export const HeaderDefault = styled.header`       
        width: 100vw;       
        background:  rgb(255, 255, 255, 0.6);
        display: flex;
        align-items: center;
        box-shadow: 0px 0px 1vw 0px rgb(255, 255, 255);
`

export const Content = styled.div`
        display: flex;
        
        width: 95vw;
        justify-content: space-between;
        align-items: center;        
        margin: 0 auto;
        
        section{
            display: flex;
            
            align-items: center;
            
            
            figure{
                width: 15vw;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 14vh;
                min-height: 100px;
                
               
                .logoimg{
                    width: 100%;
                    height: 10vh;
                    min-height: 70px;
                }
            
            }

        h1{
            font-size: 6vw;
            color: black;
            
            .dot{
                color: yellow;
            }
        }
    }


    .cart{
        color: black;
        font-size: 3vw;
        display: flex;
        align-items: center;
        width: 18vw;


        .cartContent{
            display: flex;
            align-items: center;
            font-size: 8vw;
            

            .cartIcon{
                
            }

            .qtd{
            color: purple;
            font-weight: bold;
            font-size: 4vw;
            align-self: flex-start;
            width: 5vw;
            }
        }
        
    }




    @media (min-width: 768px){
       
        section{
            margin-bottom: 0;
            
            figure{
                width: 10vw;
               
            }
            
            h1{
                font-size: 3vw;
            }
        }

        .cart{
            width: 9vw;
            .cartContent{
                font-size: 4vw;

                .qtd{
                    font-size: 2vw;
                }
            }
        }

        
    }

    
        
`