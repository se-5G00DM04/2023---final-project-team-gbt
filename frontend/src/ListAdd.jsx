import React, { useRef } from "react";

const setList = () => {};
const lists = [];

const ListAdd = () => {
  const postList = async (post) => {
    try {
      const response = await fetch("http://172.16.4.167:4000/api/shopping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      setList([...lists, data]);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const nameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const post = { name, items: 1 };
    postList(post);
    nameRef.current.value = "";
    window.location.reload();
  };

  return (
    <form
      class="d-flex justify-content-center align-items-center mb-4"
      id="addItemForm"
      onSubmit={handleSubmit}
    >
      <div class="form-outline flex-fill">
        <input
          type="text"
          class="form-control"
          id="itemName"
          ref={nameRef}
          required
        ></input>
      </div>
      <button type="submit" class="btn btn-info ms-2">
        Add
      </button>
    </form>
  );
};

export default ListAdd;
