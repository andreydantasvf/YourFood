import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ isNew }) => isNew ? "transparent" : "rgba(255, 255, 255, 0.1)"};
    color: white;
    border: ${({ isNew }) => isNew ? `1px dashed rgba(255, 255, 255, 0.1)` : "none"};
    margin-bottom: .8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;
    > button {
        border: none;
        background: none;
    }
    .button-delete {
        color: white;
        font-size: 2.2rem; 
    }
    .button-add {
        color: rgba(255, 255, 255, 0.1);
        font-size: 2.2rem; 
    }
    > input {
        width: 100%;
        height: 3.2rem;
        padding: 1rem 1.2rem;
        color: white;
        background: transparent;
        border: none;
        &::placeholder {
          color: rgba(255, 255, 255, 0.1);
        }
    }
`;