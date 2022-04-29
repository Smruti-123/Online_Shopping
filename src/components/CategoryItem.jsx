import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
//import { useHistory } from "react-router";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  width: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  //let history = useHistory();
  return (
    <Container>
     {/* <Link to={`/product`}> */}
     <Link to="/product">
      {/*<Link to={`/product/${item.product}`}>*/}
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Show Book</Button>
      {/*  <button  onClick={()=>{ history.push("/product")}}> ORDER NOW</button>*/}
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
