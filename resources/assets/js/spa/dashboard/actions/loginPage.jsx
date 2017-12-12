export default {
  onMainClick: (state, actions, event) => {
    // console.log('Mouse clicked');
    // console.log(state);
    // console.log(actions);
    document.getElementById(state.loginPage.cmdInputId).focus();
  },
  onKeyDownCmdInput: (state, actions, event) => {
    switch(event.keyCode)
    {
      case 13:
        actions.loginPage.execCmd(event.target.value);
        state.loginPage.cmdInputText = event.target.value = null;

        // Move scroll
        window.scrollTo(0, document.body.scrollHeight);
        break;
      default:
        break;
    }

    return (update) => {
      update({});
    };
  },
  onInputCmdInput: (state, actions, event) => {
    state.loginPage.cmdInputText = event.target.value;

    // Update DOM
    return (update) => {
      update({});
    }
  },
  onKeyUpCmdInput: (state, actions, event) => {
    switch(event.keyCode)
    {
      case 13:
        state.loginPage.cmdInputText = event.target.value = null;
        break;
      default:
        break;
    }

    return (update) => {
      update({});
    };
  },
  execCmd: (state, actions, cmd) => {
    return (update) => {
      state.loginPage.historyCmd.push(
        '# ' + cmd,
      );
      update({});

      let trimCmd = cmd.trim();

      let cmdArr = trimCmd.split(' ');
      let exec = (cmdArr.length === 1) ? trimCmd : cmdArr[0];

      if (exec.length > 0)
      {
        const cmdList = [
        {
          exec: 'help',
          callBack: (cmdArr) => {
            let rs = null;
            for (let i = 0; i < cmdList.length; i++)
            {
              rs = `╭━━━╮╱╱╱╱╭╮╱╱╭╮╱╭╮╱╱╱╱╭╮
╰╮╭╮┃╱╱╱╱┃┃╱╱┃┃╱┃┃╱╱╱╱┃┃
╱┃┃┃┣━━┳━┫┃╭╮┃╰━╯┣━━┳━╯┣━━┳━━╮
╱┃┃┃┃╭╮┃╭┫╰╯╯┃╭━╮┃╭╮┃╭╮┃┃━┫━━┫
╭╯╰╯┃╭╮┃┃┃╭╮┳┫┃╱┃┃╭╮┃╰╯┃┃━╋━━┃
╰━━━┻╯╰┻╯╰╯╰┻┻╯╱╰┻╯╰┻━━┻━━┻━━╯
              `;
            }

            return rs;
          },
        },
          {
            exec: 'su',
            callBack: () => {},
          },
        ];

        let findCmd = cmdList.find(findCmd => (
          (findCmd.exec === exec) && (findCmd.callBack != undefined)
        ));

        let result = null;

        if (findCmd === undefined)
        {
          result = 'Command not found: ' + cmd;
        }
        else
        {
          result = findCmd.callBack(cmdArr);
        }
        state.loginPage.historyCmd.push(result);
      }
    };
  },
};

