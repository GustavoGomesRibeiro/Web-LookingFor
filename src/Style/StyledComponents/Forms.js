import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const ImagemCapa = styled.image `
img {
  margin-left: 30px;
  width: 50%;
  right: 0px;
  position: fixed;
  margin-top: -38%;
}
`;

export const Form = styled.form`
width: 400px;
background: #fff;
padding: 20px;
position: fixed;
left: 0;
margin-left: 10%;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

img {
  margin: 10px 0 40px;
}

p {
  color: #ff3333;
  margin-bottom: 15px;
  border: 1px solid #ff3333;
  padding: 10px;
  width: 100%;
  text-align: center;
}

a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500px;
  color: black;
  text-decoration: none;
}

svg {
  margin-right: 10px;
}

input {
  height: 46px;
  margin-bottom: 15px;
  color: #777;
  font-size: 15px;
  width: 100%;
  border: 1px solid #ddd;
  &::placeholder {
    color: #999;
  }
}

button {
  color: #fff;
  font-size: 16px;
  background: #e02041;
  height: 56px;
  border: 0;
  border-radius: 5px;
  width: 100%;
}

hr {
  margin: 20px 0;
  border: none;
  border-bottom: 1px solid #cdcdcd;
  width: 100%;
}
`;