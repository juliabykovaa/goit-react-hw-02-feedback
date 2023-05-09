import styled from '@emotion/styled';

export const RateList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 0;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover, &:focus {background-color: ${props => {
    switch (props.name) {
      case 'good':
        return '#50C878';
      case 'bad':
        return '#EE4B2B';
      default:
        return '#E4D00A';
    }
}};
}
`;
