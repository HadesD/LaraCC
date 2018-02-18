import axios from 'axios';

import site from '../../../commons/site.js';
import dashboard from '../../commons/dashboard.js';

import execCmd from './execCmd.js';

export default {
  update: () => ({}),

  onMainClick: (event) => (state) => {
    document.getElementById(state.cmdInputId).focus();
  },
  onKeyDownCmdInput: (event) => (state, actions) => {
    switch (event.keyCode)
    {
      case 13:
        state.historyCmd.push(
          execCmd(event.target.value)(state, actions) || ''
        );
        state.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }
  },
  onInputCmdInput: (event) => (state) => {
    state.cmdInputText = event.target.value;
  },
  onKeyUpCmdInput: (event) => (state) => {
    switch (event.keyCode)
    {
      case 13:
        state.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }
  },
};

