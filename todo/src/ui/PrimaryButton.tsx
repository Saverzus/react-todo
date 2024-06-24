import styled from 'styled-components';

const PrimaryButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default PrimaryButton;
