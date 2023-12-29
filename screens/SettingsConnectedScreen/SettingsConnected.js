import React from 'react';
import SettingsConnectedContainer from './subscreens/SettingsConnectedContainer';
import SettingConnectedOpt from './subscreens/SettingConnectedOpt';
const SettingsConnected = () => (
  <SettingsConnectedContainer>
      {/* supported setting connected options */}
      <SettingConnectedOpt connectedOptName={'Google'}/>
      <SettingConnectedOpt connectedOptName={'Facebook'}/>
      <SettingConnectedOpt connectedOptName={'Twitter'}/>
  </SettingsConnectedContainer>
)
export default SettingsConnected;