import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  padding: 5.6rem 4rem 4rem;
  background: rgba(0, 0, 0, 0.32);
  border-radius: .8rem;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.7rem;

  > img {
    width: 17rem;
    height: 17rem;
    border-radius: 50%;
  }

  > h3 {
    font-weight: 700;
    font-size: 2.4rem;
    text-align: center;
  }
  
  > span {
    font-size: 1.4rem;
    text-align: center;
  }

  > .price {
    font-size: 3.2rem;
    color: #82F3FF;
  }
`;