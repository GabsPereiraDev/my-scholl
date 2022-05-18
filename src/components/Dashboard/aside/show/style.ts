import styled from 'styled-components'

interface IShow {
    show: boolean
}

export const Container = styled.li<IShow>`

div{
     padding: 1rem 1rem;
     display: flex;
     justify-content:space-between;
     cursor: pointer;
}
ul{
    background-color: var(--blue300);
    width: 100%;
    transition:all 0.5s;
    li{
        transition:all 0.1s;
        overflow: hidden;
        height: ${props => props.show ? "auto" : "0"};
        padding: ${props => props.show ? "0.5rem 1.5rem" : " 0 1.5rem"};
        &:hover{
            color:var(--yellow)
        }
        display: flex;
        align-items:center
    }
}
`