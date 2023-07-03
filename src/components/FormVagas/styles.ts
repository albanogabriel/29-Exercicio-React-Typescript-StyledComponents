import styled from 'styled-components'
import temaPadrao from '../../theme/padrao'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${temaPadrao.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BtnPesquisar = styled.button`
  background-color: ${temaPadrao.corPrincipal};
  border: 1px solid ${temaPadrao.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${temaPadrao.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${temaPadrao.corPrincipal};
`
