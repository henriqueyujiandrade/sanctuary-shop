import styled from 'styled-components'

export const Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

export const ContainerList = styled.div`
margin-top: 4vh;
width: 85vw;
background: rgb(255, 255, 255, 0.4);
height: 80vh;
border-radius: 1vw;
overflow: auto;
box-shadow: 0px 0px 1vw 0px rgb(255, 255, 255);

::-webkit-scrollbar{
    width: 1.2vw;
}
::-webkit-scrollbar-track{
    background: rgb(255, 255, 255, 0.4);
    border-radius: 0.4vw;
}
::-webkit-scrollbar-thumb{
    background: rgb(255, 255, 0, 0.4);
    border-radius: 2vw;
}

`


export const Ul = styled.ul`
width:80vw;
display: flex;
gap: 2.2vw;
flex-wrap: wrap;
margin: 0 auto;
margin-top: 4vh;
margin-bottom: 4vh;


@media (min-width: 768px){
gap: 2.2vw;
}
`