import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  width: 100%;
  height: 50px;

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
