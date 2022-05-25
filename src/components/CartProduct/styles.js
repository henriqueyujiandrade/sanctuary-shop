import styled from 'styled-components'

export const LiCart = styled.li`
        list-style: none;
        display: flex;
        justify-content: space-between ;
        align-items: center;
        background-color: black;
        width: 100%;
        box-shadow: 0px 0px 1vw 0px yellow;
        border-radius: 0.8vw;
        border: 0.1vw solid yellow;
        margin-bottom: 3vh;
        
        :hover{
            border: 0.1vw solid purple;
            box-shadow: 0px 0px 1vw 0px purple;
        }
        
        
        figure{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20vw;
            
            
            img{
                width: 100%;
                height: 100% ;
                border-radius: 0.8vw;
            }
        }

        .infos{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 25vw;
                justify-content: space-between;
                background: rgb(255, 255, 255, 0.6); 
                border-radius:1vw;
                height: 100%;

                span{
                    font-size: 1.5vw;
                }
                
            }

        .title{
            width: 100%;
           
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1vh;
          
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
            font-size: 1.5vw;
            overflow: hidden;
            text-overflow: ellipsis;        
                  
            
            }            
        }

        .buttonDiv{
            
            display: flex;
            align-items: center;
            margin-right: 0.5vw;

            button{
                width: 4vw;
                font-size: 1vw ;
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
        }

    @media (min-width: 768px) {
            
        
           
            
            figure{
                width: 10vw;
               
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
                width: 2vw;
            }
        }
    }

       
`