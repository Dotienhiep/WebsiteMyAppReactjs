import styled from "styled-components";

export default styled.div`
  display: flex;
  height: auto;
  margin-top: 20px;
  justify-content: center;
  border: 1px solid red;
  flex-direction: column;
  padding: 15px;
  width: 94%;
  border-radius: 6px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-image: url("/assets/images/khung-product.png");
  background-repeat: no-repeat;
  background-position: center top 15px;
  &:hover {
    border: 1px solid #ccc;
  }
  &:hover .list-btn {
    display: block;
  }
  .haha {
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    border-radius: 10px;
  }
  .content .title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica;
  }
  .content .cost {
    margin: 20px 0;
    border-radius: 30px;
  }
  .content .cost span {
    background-color: #cb1a21;
    color: #fff;
    padding: 5px 8px;
    border-radius: 30px;
  }
  .content .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content .btn {
    background-color: #cb1a21;
    padding: 3px 8px;
    border-radius: 30px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #fff;
  }
  .list-btn {
    display: none;
    margin: 20px 0 0 0;
  }
  .list-btn button {
    padding: 5px 8px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: bold;
  }
  .buy-now {
    margin-right: 30px;
    background-color: #cb1a21;
  }
  .cart {
    background-color: #00bfff;
  }
  .cart .icon {
    margin-right: 10px;
  }
`;
