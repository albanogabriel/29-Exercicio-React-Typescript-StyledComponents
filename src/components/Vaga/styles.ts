import styled from 'styled-components'
import temaPadrao from '../../theme/padrao'

export const Li = styled.li`
  border: 1px solid ${temaPadrao.corPrincipal};
  background-color: ${temaPadrao.corSecundaria};
  color: ${temaPadrao.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${temaPadrao.corPrincipal};
    color: ${temaPadrao.corSecundaria};
  }

  :hover a {
    border-color: ${temaPadrao.corPrincipal};
    background-color: ${temaPadrao.corSecundaria};
    color: ${temaPadrao.corPrincipal};
  }

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const VagaLink = styled.a`
  border-color: ${temaPadrao.corSecundaria};
  background-color: ${temaPadrao.corPrincipal};
  color: ${temaPadrao.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
