//this file will make a published button for the Third Step screen so the user can use it to publish their resource
import React from 'react';
import { Button} from 'react-native-paper';
import { btnSettings } from '../submitBtnProp';
const PublishedBtn = ({onPress}) => (
  <Button onPress={onPress} {...btnSettings}>
    Publish
  </Button>
)
export default PublishedBtn;