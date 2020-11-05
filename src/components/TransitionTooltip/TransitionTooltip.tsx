import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Zoom } from '@material-ui/core';
import { Info } from '@material-ui/icons';

interface ITitle {
  texto: string;
}

const TransitionTooltip: React.FC<ITitle> = ({ texto }: ITitle) => {
  return (
    <div>
      <Tooltip TransitionComponent={Zoom} title={texto} placement="top" arrow>
        <Info />
      </Tooltip>
    </div>
  );
};

export default TransitionTooltip;
