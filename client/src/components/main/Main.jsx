import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";
import logo from "../../logo.jpeg";
import Item from "../item/Item.jsx";
import AddComment from "../comment/Comment.jsx";
import "./main.scss";

function Main() {
  // I am using React Query to ensure robust and DRY CRUD operations
  //Docs at https://tanstack.com/query/v4/docs/adapters/react-query
  const { isLoading, error, data } = useQuery(["items"], () =>
    makeRequest.get("http://localhost:4200/api/items").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="flex-container main">
      <img src={logo} alt="" />
      <h1>Hi!</h1>
      <h2>
        Here are some great reasons why working for "thegoodcode" is a good
        idea!
      </h2>

      <ul className="list">
        {isLoading
          ? "Loading..."
          : error
          ? "Error!"
          : data
          ? data.map((item) => (
              <Item key={item.id} id={item.id} description={item.description} />
            ))
          : null}
      </ul>
      <h2>Can you think on another reason? </h2>
      <h3>Let us know in the comment below!</h3>
      <AddComment />
    </div>
  );
}

export default Main;
