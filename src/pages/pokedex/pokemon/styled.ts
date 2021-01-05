import styled, { css } from 'styled-components'

import { MdKeyboardBackspace, MdFavoriteBorder } from "react-icons/md"

export const Container = styled.section`
  width: 100%;
  max-width: 768px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;


  margin: 0 auto;
  

`
export const ImageContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;  


  margin: 0 auto;

`
export const InfoContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 53%;

  border-radius: 40px 40px 0 0;

  display: flex;

  text-align: left;

  margin: -30px auto 0;
  padding: 0 30px;

  background-color: #fff;
  
  > section {
    margin: 40px 0;
    width: 100%;
  }

   div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h1 {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    color: #bbb;
  }

  p {
    font-size: 18px;
    color: #010101;
  }

`

export const Ability = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;

    span {
      text-transform: capitalize;
    }
`

const icon = css`
  font-size: 20px;
  color: #fff;

`


export const Back = styled(MdKeyboardBackspace)`
  ${icon}
`


export const Hearth = styled(MdFavoriteBorder)`
  ${icon}
  cursor: pointer;

  &:hover {
    font-size: 25px;
    transition: 0.2s;
  }
`

export const Icons = styled.div`
  width: 100%;

  padding: 30px 20px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
    
`


export const Info = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  h1 {
    color: #fff;
    font-size: 25px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  p {
    width: 100px;

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 0;
    
    margin: 10px 0;

    color: #fff;
    font-size: 17px;
    text-transform: capitalize;

    background-color: rgba(255,255,255, 0.5);
    margin-right: 10px
  }

  span {
    color: #fff;
    font-size: 17px;
    font-weight: bold;
  }
`
export const Types = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    position: relative;

    img {
      width: 250px;
    }

`