import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    display: flex;
    justify-content: top;
    align-items: top;
    flex-direction:column;
    min-height:100vh;
    background-color: var(--blue);
    
    header{
        background-color: var(--yellow);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div{
 
        ul{
            list-style-type: none;
        }
        >ul{
 
            background-color: var(--blue);
            color: #fff;
            
            div{
                padding: 1rem 1rem;
            }
          
        }
    }
`