import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ title, backAction }) => (
  <Appbar.Header>
    {backAction && <Appbar.BackAction onPress={backAction} />}
    <Appbar.Content title={title} />
  </Appbar.Header>
);

export default AppBar;
