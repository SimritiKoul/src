import React, { useState } from 'react';
import ProfileContainer from "./subscreens/ProfileContainer";
import ProfileOption from "./subscreens/ProfileOption";
import ProfileOptionsPortion from "./subscreens/ProfileOptionsPortion";
import ProfileImage from "./subscreens/ProfileImage";
import { useAuth } from '../../context/AuthProvider';
import DialogMessage from "../../components/Dialog";

const ProfilePage = ({ navigation }) => {
  const [isLogoutDialogVisible, setIsLogoutDialogVisible] = useState(false);
  const [isDeleteProfileDialogVisible, setIsDeleteProfileDialogVisible] = useState(false);
  const [deletionError, setDeletionError] = useState(null);
  const { logout, deleteProfile } = useAuth();

  const showLogoutDialog = () => setIsLogoutDialogVisible(true);
  const hideLogoutDialog = () => setIsLogoutDialogVisible(false);

  const showDeleteProfileDialog = () => {
    setDeletionError(null); // Reset deletion error when showing the delete profile dialog
    setIsDeleteProfileDialogVisible(true);
  };

  const hideDeleteProfileDialog = () => {
    setDeletionError(null); // Reset deletion error when hiding the delete profile dialog
    setIsDeleteProfileDialogVisible(false);
  };

  const handleLogoutConfirmation = () => {
    logout();
    hideLogoutDialog();
  };

  const handleDeleteProfileConfirmation = async () => {
    try {
      await deleteProfile();
      // Handle any post-deletion actions, e.g., navigate to the login screen
      handlePostDeletionActions();
    } catch (error) {
      // Handle deletion error (display error message, etc.)
      console.error('Error deleting profile:', error);
      setDeletionError('Error deleting profile. Please try again.');
    } finally {
      hideDeleteProfileDialog();
    }
  };

  const handlePostDeletionActions = () => {
    // Example: Navigate to the login screen
    navigation.navigate('Login');
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
        <ProfileOption optionName={'Delete Profile'} iconName={'trash-outline'} onPress={showDeleteProfileDialog} />
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

      <DialogMessage
        visible={isDeleteProfileDialogVisible}
        onDismiss={hideDeleteProfileDialog}
        title="Delete Profile"
        content="Are you sure you want to delete your profile? This action cannot be undone."
        buttons={[
          { title: 'No', onPress: hideDeleteProfileDialog },
          { title: 'Yes', onPress: handleDeleteProfileConfirmation },
        ]}
      />

      {deletionError && (
        <DialogMessage
          visible={true} // Always visible for errors
          onDismiss={() => setDeletionError(null)}
          title="Error"
          content={deletionError}
          buttons={[
            { title: 'OK', onPress: () => setDeletionError(null) },
          ]}
        />
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
