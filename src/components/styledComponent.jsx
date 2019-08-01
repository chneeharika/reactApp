import styled from 'styled-components';

export const P = styled.p`
color:red;
&:hover {
    color:green;
    font-weight:bold;
    font-size:30px;
}
@media screen and (max-width: 768px) {
    color: blue;
  }
`;

export const P1 = styled.p`
color: ${props =>getDarkerColor(props.name)};
`;

const getDarkerColor = v => `dark${v}`;

export const ViewButton = styled.button`
    background-color:aqua;
    width: 100px;
    height: 50px;
    color:black;
    display:inline-block;
`;

export const P2 = styled.p`
display: inline;
`;
