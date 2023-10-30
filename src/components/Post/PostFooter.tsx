import styled from '@emotion/styled'
import jung_avatar from '../../../static/jeju.png'
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
  padding: 20px 0 10px 0;
  color: #000;
  border-top: 1px solid #c2c2c2;

  @media (max-width: 768px) {
    display: none;
  }
`

const FooterImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-left: 15px;
  object-fit: cover;
`

const DesContainer = styled.div`
  display: block;
  margin: auto 0 auto 40px;

  h4 {
    margin-bottom: 1rem;

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
  width: 20px;
  height: 20px;
  background: inherit;
  color: #757575;
  font-size: 1rem;2
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
  font-size: 14px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
`
const IndexBackgroundContainer = styled(Link)`
  background: #eeeeee;
  color: #757575;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 20px;
`

const PostFooter = () => {
  let historyLink
  if (typeof window !== 'undefined') {
    historyLink = sessionStorage.getItem('selected_link')
  }

  return (
    <Fragment>
      <PostFooterContainer>
        <FooterImg src={jung_avatar} />
        <DesContainer>
          <h4>사람 좋아하는 개발자의 기록 공간입니다. </h4>
          <div style={{ display: 'flex', columnGap: '5px' }}>
            <ContactContainer isFooter>
              <MdOutlineEmail />
              <a href="mailto: junghee@gmail.com"></a>
            </ContactContainer>
            <ContactContainer isFooter>
              <AiFillGithub />
              <a href="https://github.com/wjdgml3092"></a>
            </ContactContainer>
          </div>
        </DesContainer>
      </PostFooterContainer>

      <IndexContainer>
        <IndexBackgroundContainer to={historyLink ?? '/'}>
          <PrevPageIcon>
            <FontAwesomeIcon icon={faArrowLeft} />
          </PrevPageIcon>
          <span>글 목록보기</span>
        </IndexBackgroundContainer>
      </IndexContainer>
    </Fragment>
  )
}

export default PostFooter
