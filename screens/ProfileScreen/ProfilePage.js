import React, { useState } from 'react';
import ProfileContainer from "./subscreens/ProfileContainer"
import ProfileOption from "./subscreens/ProfileOption"
import ProfileOptionsPortion from "./subscreens/ProfileOptionsPortion"
import ProfileImage from "./subscreens/ProfileImage"
import { useAuth } from '../../context/AuthProvider';
import DialogMessage from "../../components/Dialog";
const ProfilePage = ({ navigation }) => {
  const [isLogoutDialogVisible, setIsLogoutDialogVisible] = useState(false);
  const showLogoutDialog = () => setIsLogoutDialogVisible(true);
  const hideLogoutDialog = () => setIsLogoutDialogVisible(false);
  const {logout , deleteProfile} = useAuth()
  const handleLogoutConfirmation = () => {
    // Perform any necessary logout actions here
    logout()
    hideLogoutDialog(); // Close the dialog
    
  };

  return (
    <ProfileContainer>
      <ProfileImage navigation={navigation}/>
      <ProfileOptionsPortion>
        <ProfileOption optionName={'Bookmarked Services'} iconName={'bookmark'} onPress={() => navigation.navigate('BookmarkedServices')} />
        <ProfileOption optionName={'View Published Service'} iconName={'md-document-outline'} onPress={() => navigation.navigate('View Published Service')} />
        <ProfileOption optionName={'Settings'} iconName={'settings-sharp'}
          onPress={() => navigation.navigate('SettingsNavigation')} />
        <ProfileOption optionName={'Help'} iconName={'help-with-circle'} onPress={() => navigation.navigate('Help')} />
        <ProfileOption optionName={'Delete Profile'} iconName={'trash-outline'} onPress={deleteProfile} />
        <ProfileOption optionName={'Log Out'} iconName={'log-out-outline'} onPress={showLogoutDialog}/>
      </ProfileOptionsPortion>
      <DialogMessage
        visible={isLogoutDialogVisible}
        onDismiss={hideLogoutDialog}
        title="Log Out"
        content="Are you sure you want to log out?"
        buttons={[
          { title: 'No', onPress: hideLogoutDialog },
          { title: 'Yes', onPress: handleLogoutConfirmation },
        ]}
      />
    </ProfileContainer>
  );
}
export default ProfilePage;