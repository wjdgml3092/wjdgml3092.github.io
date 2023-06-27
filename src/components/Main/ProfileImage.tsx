import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 280px;
  height: 240px;
  object-fit: contain;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage = ({ profileImage }: ProfileImageProps) => {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
