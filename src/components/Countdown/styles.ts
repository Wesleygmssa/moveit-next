import styled from 'styled-components';

export const Container = styled.div`

.countdownButtonActive{
    background: #ccc;
    color: var(--title);
    transition:  0.5s;
  }

.countdownButtonActive:hover{
    background: var(--red);
    color: var(--white);
}

.countdownButton{
    background: #ccc;
    color: var(--text);
    cursor: not-allowed;
    
}

`;

export const ContainerInt = styled.div`
   display: flex;
   align-items: center;
   font-family:  Rajdhani;
   font-weight: 600;
   color: var(--title);

   > span{
       font-size: 6.25rem;
       margin: 0.0.5rem;
  }


   & > div{
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: space-evenly;

       background: var(--white);
       box-shadow: 0 0 60px rgba(0,0,0,0.05);
       border-radius: 5px;
       font-size: 8.5rem;
       text-align: center;


       span{
           flex: 1;
       }

       span:first-child{
            border-right: 1px solid #f0f1f3;
       }

       span:last-child{
            border-left: 1px solid #f0f1f3;
       }
   }


`;