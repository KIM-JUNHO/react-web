import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Store from './store';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_RULES = gql`
  {
    Rules {
      id
      srcAddr
      dstAddr
    }
  }
`;

const CREATE_RULES = gql`
  mutation createRule($srcAddr: String!, $dstAddr: String!) {
    createRule(srcAddr: $srcAddr, dstAddr: $dstAddr)
  }
`;

function App() {
  const [createRule] = useMutation(CREATE_RULES);

  const handleSubmit = async () => {
    createRule({
      variables: { srcAddr: '70.80.15', dstAddr: '84232' }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <Store.Provider>
      <ThemeProvider theme={theme}>
        <div>Hello React</div>
        <button onClick={handleSubmit}>button</button>
      </ThemeProvider>
    </Store.Provider>
  );
}

export default App;
