import React from 'react';

import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return(
    <div>
      <button className="back" onClick={ history.goBack }>
        <i aria-hidden="true"></i>Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
