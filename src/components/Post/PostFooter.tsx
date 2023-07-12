import styled from '@emotion/styled'
import jung_avatar from '../../../static/jung_avatar.png'
import { ContactContainer } from 'components/Main/Introduction'
import { MdOutlineEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react'
import { Link } from 'gatsby'

const PostFooterContainer = styled.div`
  display: flex;
  width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 10px 0;
  color: #000;
  border-top: 1px solid #c2c2c2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0px;
  }
`

const FooterImg = styled.img`
  width: 180px;
  height: 200px;

  @media (max-width: 768px) {
    width: 140px;
    height: 160px;
  }
`

const DesContainer = styled.div`
  display: block;
  margin: auto 0 auto 40px;

  h3 {
    margin-bottom: 2rem;

    br {
      display: none;
    }
  }

  @media (max-width: 768px) {
    margin: auto 0 auto 10px;
  }

  @media (max-width: 480px) {
    h3 {
      // font-size: 1rem;
      br {
        display: block;
      }
    }
  }
`

const PrevPageIcon = styled.div`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background: inherit;
  color: #000000;
  font-size: 20px;
  cursor: pointer;
  margin-right: 6px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    font-size: 16px;
  }
`
const IndexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  margin: 10px auto 0 auto;
  padding-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
`
const IndexBackgroundContainer = styled(Link)`
  background: #e4e4e4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 20px;
`

const PostFooter = () => {
  const goBackPage = () => window.history.back()

  return (
    <Fragment>
      <PostFooterContainer>
        <FooterImg src={jung_avatar} />
        <DesContainer>
          <h3>
            사람 좋아하는 개발자의 <br /> 기록 공간입니다.{' '}
          </h3>
          <ContactContainer>
            <MdOutlineEmail />
            <a href="mailto: junghee@gmail.com">junghee@gmail.com</a>
          </ContactContainer>
          <ContactContainer>
            <AiFillGithub />
            <a href="https://github.com/wjdgml3092">wjdgml3092</a>
          </ContactContainer>
        </DesContainer>
      </PostFooterContainer>

      <IndexContainer>
        <IndexBackgroundContainer to="/">
          <PrevPageIcon onClick={goBackPage}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </PrevPageIcon>
          글 목록보기
        </IndexBackgroundContainer>
      </IndexContainer>
    </Fragment>
  )
}

export default PostFooter
