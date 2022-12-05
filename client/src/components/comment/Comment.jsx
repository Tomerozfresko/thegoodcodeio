import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios.js";
import "./comment.scss";

function AddComment() {
  const queryClient = useQueryClient();
  // I am using Formik and Yup for better form handelling and validation
  // Docs at https://formik.org/docs/overview
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: Yup.object({
      comment: Yup.string()
        .min(4, "Think Harder!")
        .required("Empty is not a reason!"),
    }),
    onSubmit: () => {
      mutation.mutate({ id: new Date(), description: formik.values.comment });
    },
  });

  const mutation = useMutation(
    (newItem) => {
      return makeRequest.post("http://localhost:4200/api/items", newItem);
    },
    {
      onSuccess: () => {
        // Invalidate and refetchh
        queryClient.invalidateQueries(["items"]);
      },
    }
  );

  return (
    <>
      <div>
        {mutation.isLoading ? (
          "Adding item..."
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}
            {mutation.isSuccess ? (
              <div>Thank you for your Feedback!</div>
            ) : null}
          </>
        )}
      </div>
      <form onSubmit={formik.handleSubmit} className="addItem">
        <input
          name="comment"
          id="comment"
          size="60"
          type="text"
          placeholder={`Why do you think "thegoodcode is an owesome place?`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
        />
        {formik.touched.comment && formik.errors.comment ? (
          <div className="err">{formik.errors.comment}</div>
        ) : null}
        <button>Add Item</button>
      </form>
    </>
  );
}

export default AddComment;
