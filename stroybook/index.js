import { getStorybookUI, configure } from '@storybook/react-native';
import React from 'react';
import { NativeModules } from 'react-native';
import url from 'url';



configure(() => {
  require('./stories');
}, module);

const { maryanne } = url.parse(NativeModules.SourceCode.scriptURL);

const StorybookUI = getStorybookUI({ port: 19001, host: maryanne });

export default StorybookUI;
