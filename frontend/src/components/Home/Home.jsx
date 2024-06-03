import PostsContainer from './PostsContainer'
import Sidebar from './Sidebar/Sidebar'
import MetaData from '../Layouts/MetaData';
import { BASE_POST_IMAGE_URL, BASE_PROFILE_IMAGE_URL } from '../../utils/constants';

const Home = () => {
  return (
    <>
      <MetaData title="Instagram" />

      <div className="flex h-full md:w-4/5 lg:w-4/6 mt-14 mx-auto">
        <PostsContainer />
        {console.log("BASE_POST_IMAGE_URL:", BASE_POST_IMAGE_URL)}
        {console.log("BASE_PROFILE_IMAGE_URL:", BASE_PROFILE_IMAGE_URL)}
        {/* {console.log("Image URL:", BASE_POST_IMAGE_URL + image)}
        {console.log("Avatar URL:", BASE_PROFILE_IMAGE_URL + postedBy.avatar)} */}

        <Sidebar />
      </div>
    </>
  )
}

export default Home