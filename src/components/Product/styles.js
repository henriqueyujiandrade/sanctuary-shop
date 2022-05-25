import styled from 'styled-components'

export const Li = styled.li`
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: black;
        width: 38.9vw;
        box-shadow: 0px 0px 1vw 0px yellow;       
        border-radius: 0.8vw;
        border: 0.1vw solid yellow;
        
        :hover{
            border: 0.1vw solid purple;
            box-shadow: 0px 0px 1vw 0px purple;
        }
        
        
        figure{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20vw;
            height: 50% ;
            min-height: 20px;
            
            
            img{
                width: 100%;
                height: 100% ;
            }
        }

        .infos{
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 40% ;
                justify-content: space-between;
                background: rgb(255, 255, 255, 0.6);                
                width: 100%;

                span{
                    font-size: 2.5vw;
                }
                
            }

        .title{
            width: 100%;
           
            display: flex;
            align-items: center;
            justify-content: center;
          
                h2{
                font-size: 2.3vw;               
                }
        }
       
        .description{
            width: 100%;
           
            display: flex;
            align-items: flex-start;
                    
            height: 9.6vh;
            
            p{
            font-size: 2vw;
            overflow: hidden;
            text-overflow: ellipsis;        
                  
            
            }            
        }

        .buttonDiv{
            height: 10%;
            display: flex;
            align-items: center;

            button{
                width: 30vw;
                font-size: 2vw ;
                font-family: 'Nunito', sans-serif;
                background: rgb(255, 255, 255, 0.6);
                border: 0.1vw solid yellow;
                color: purple;
                font-weight: bold;
                border-radius: 2vw;
                transition: 0.5s;

                :hover{
                    cursor: pointer;
                    box-shadow: 0px 0px 10px 0px yellow; 

                }

                :active{
                    box-shadow: 0px 0px 10px 0px yellow; 
                }
                
            }
        }

    @media (min-width: 768px) {
            
            width: 18.35vw;
           
            
            figure{
                width: 10vw;
                height: 50% ;
            }

            .infos{
                span{
                    font-size: 1.5vw;
                }
            }

            .title{
              
                    h2{
                    font-size: 1.4vw;               
                    }
            }
        
            .description{               
                p{
                font-size: 1vw;
                
                }            
            }

            .buttonDiv{
                button{
                    width: 13vw;
                    font-size: 1vw;
                }
            }
    }

       
`
