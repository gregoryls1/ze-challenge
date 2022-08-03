import styled from "styled-components";

export const Badge = styled.div`
    height: 48px;
    width: 171px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    font-size: 14px;
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px 0px;
    cursor: pointer;

    border : ${(props) => props.active ? '1px solid rgb(255, 197, 0)' : ''};
`