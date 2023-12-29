import React from 'react';
import renderAvatar from '../utils/renderAvatar';
//avatarSetting is an object of props in Avatar react-native-paper
function AvatarIcon({avatarSettings}) {
  return (
    renderAvatar(avatarSettings)
    
  );
}
export default AvatarIcon;