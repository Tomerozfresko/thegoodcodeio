import React from "react";
import "./item.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";

function Item({ description, id }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    (id) => {
      return makeRequest.delete("http://localhost:4200/api/items/" + id);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["items"]);
      },
    }
  );

  function handleDelete() {
    deleteMutation.mutate(id);
  }

  return (
    <li id={id} className="item">
      {description}
      <ClearIcon onClick={handleDelete} />
    </li>
  );
}

export default Item;
