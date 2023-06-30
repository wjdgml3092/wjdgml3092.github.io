import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { MdOutlineEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  padding: 30px 0;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;

    padding: 0 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0;
  }
`

const RightContainer = styled.div`
  display: block;
  margin-left: 40px;

  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-left: 0px;
    padding: 0 20px;

    h1 {
      font-size: 1.7rem;
    }

    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
`
export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`
const ProfileImageContainer = styled(GatsbyImage)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Background>
      <Container>
        <ProfileImageContainer image={profileImage} alt="Profile Image" />

        <RightContainer>
          <h1>Welcome to Jung's Blog</h1>
          <h3>사람 좋아하는 개발자의 기록 공간입니다. </h3>
          <ContactContainer>
            <MdOutlineEmail />
            <a href="mailto: junghee@gmail.com">junghee@gmail.com</a>
          </ContactContainer>
          <ContactContainer>
            <AiFillGithub />
            <a href="https://github.com/wjdgml3092">wjdgml3092</a>
          </ContactContainer>
        </RightContainer>
      </Container>
    </Background>
  )
}

export default Introduction
