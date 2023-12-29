//mockup reviews
import { Image } from 'react-native';
import reviewer from '../../images/twitterIcon.png'
import reviewer2 from '../../images/Reslogo.png'
import reviewer3 from '../../images/Unite_Logo.png'
import reviewer4 from '../../images/facebookIcon.png'
import reviewer5 from '../../images/googleIcon.png'
export default mockupReivew = [
  {name: 'John', content: 'This resource is good', avatar: Image.resolveAssetSource(reviewer).uri, rating: 5, postedDate: '3 days ago'},
  {name: 'Tammy', content: 'Hello, this resource is not good as it desribed. Recommend not to use this', avatar: Image.resolveAssetSource(reviewer2).uri, rating: 2, postedDate: '7 days ago'},
  {name: 'David', content: 'Hello, this resource is not good as it desribed. Recommend not to use this Hello, this resource is not good as it desribed. Recommend not to use this Hello, this resource is not good as it desribed. Recommend not to use this', avatar: Image.resolveAssetSource(reviewer3).uri, rating: 1, postedDate: '2 days ago'},
  {name: 'Jude', content: 'This resource is ok', avatar: Image.resolveAssetSource(reviewer4).uri, rating: 1, postedDate: '6 days ago'},
  {name: 'Jacob', content: 'This resource is good', avatar: Image.resolveAssetSource(reviewer5).uri, rating: 5, postedDate: '1 days ago'},
  {name: 'Mike', content: 'This resource is good', avatar: Image.resolveAssetSource(reviewer3).uri, rating: 3, postedDate: '7 days ago'},
  {name: 'Joana', content: 'This resource is good', avatar: Image.resolveAssetSource(reviewer2).uri, rating: 2, postedDate: '9 days ago'},
  {name: 'Blanca', content: 'Hello, this resource is not good as it desribed. Recommend not to use this Hello, this resource is not good as it desribed. Recommend not to use this Hello, this resource is not good as it desribed. Recommend not to use this', avatar: Image.resolveAssetSource(reviewer5).uri, rating: 5, postedDate: '10 days ago'}
  ,{name: 'Henry', content: 'This resource is good', avatar: Image.resolveAssetSource(reviewer).uri, rating: 4, postedDate: '20 days ago'}

]
//<ReviewCard reviewerName='Phong' content='This resource is good' reviewerProfileUri={Image.resolveAssetSource(reviewerPicture).uri} ratings={4} postedDate={'5 days ago'}/>