import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { MdOutlineEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Background = styled.div`
  width: 100%;
  // background: #d6e4ff;
  // color: #ffffff;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  padding: 30px 0;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
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
`
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`
const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Background>
      <Container>
        <ProfileImage profileImage={profileImage} />

        <RightContainer>
          <h1>Welcome to Jung's Blog</h1>
          <h3>경험과 지식을 기록하는 공간입니다. </h3>
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
