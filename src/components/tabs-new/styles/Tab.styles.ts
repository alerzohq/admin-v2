import styled from "styled-components";

export const TabButton = styled.button`
  margin-right: 1rem;
  color: #879aa5;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &[data-active="true"] {
    border-bottom: 2px solid #0077ff;
    color: #0077ff;
  }
`;
export const TabLinksContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 60px rgba(0, 0, 0, 0.04);
  border-radius: 9px;
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
  cursor: pointer;
`;
