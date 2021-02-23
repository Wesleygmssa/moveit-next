import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    > img{
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }    
`;

export const ContentInt = styled.div`
  margin-left: 1.5rem;

  strong{
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--title);
    }

    p{
        align-items: center;
        font-size: 1rem;

        img{
         margin-right: 0.5rem;
    }

    }

   
`;