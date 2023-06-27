import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      지속적으로 기록하는 Jung's Blog
      <br />© 2023 FrontDeveloper JungHee.
    </FooterWrapper>
  )
}

export default Footer
