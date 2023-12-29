//make a avartar component that displays the country image on the languaege card (the url of the country image is the picture argument) 
import AvatarIcon from '../../../components/AvatarIcon';
export default renderCountryImage = (picture) => {
  //setting for the returned avatar (size)
  const avatarSettings = {
    source: picture ? picture : "https://placehold.co/400?text=No+image+available",
    size: 50
  }
  return <AvatarIcon avatarSettings={avatarSettings}/>
}