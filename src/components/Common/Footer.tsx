import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  padding: 20px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      Jung's Blog © 2023 FrontDeveloper JungHee Kim.
    </FooterWrapper>
  )
}

export default Footer
