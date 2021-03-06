import React from 'react';
import DocForm from './DocForm.js';

const Settings = (props) => {
  let docId = props.location.pathname.slice(10);
  return <DocForm docId={docId} mode={'settings'} history={props.history} />
}

export default Settings;

