import styled from 'styled-components/macro'

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 405px;
    height: 292px;
  }
`

export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #fff;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    font-size: 32px;
  }
`

export const Description = styled.p`
  text-align: center;
  color: #fff;
  font-family: 'Roboto';
  font-size: 16px;
  max-width: 800px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 20px;
  }
`
