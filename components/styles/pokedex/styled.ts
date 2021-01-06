import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 768px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  margin: 0 auto;
  
  div {
    width: 100%;
    max-width: 740px;

    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;

    
  }
 

`

export const StyledLink = styled.a`
    width: 50%;
    max-width: 300px;
    margin: 20px 10px;
    padding: 30px ;
    text-decoration: none;

    background-color: #da2c43;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 20px;

    transition: 0.3s;
    cursor: pointer;

    @media screen and (max-width: 700px) {
      width: 100%;

    }
    

    h1 {
      color: #fff;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 1.5rem;
    }

    img {
      width: 150px;

    }

    &:hover {
      opacity: 0.8;
      -webkit-box-shadow: 5px 3px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 5px 3px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 5px 3px 5px 0px rgba(0,0,0,0.75);
    }
  
`

export const Btn = styled.a`
  width: 100%;
  height: 60px;
  max-width: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  
  border-radius: 10px;

  background-color: #3895d3;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`
