import React, { useState, useEffect } from "react";

function ListItem() {
  const [lists, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/shopping");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  const totalItems = lists.reduce((acc, item) => acc + parseInt(item.items), 0);

  const deleteList = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/shopping/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      setList(lists.filter((list) => list.id !== data.id));
      console.log("Deleted: ", data);
      window.location.reload();
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  const updateItemCount = async (id, newCount) => {
    try {
      const response = await fetch(`http://localhost:4000/api/shopping/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, items: newCount }),
      });
      const data = await response.json();
      // Update the state with the updated data from the server
      setList((prevLists) =>
        prevLists.map((list) =>
          list.id === data.id ? { ...list, items: data.items } : list
        )
      );
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleCheckboxChange = (id) => {
    // Call deleteList with the id of the clicked checkbox
    deleteList(id);
  };

  const handleIncrement = (id) => {
    // Get the current count for the item
    const currentCount = lists.find((list) => list.id === id).items;
    // Update the count and send a PUT request
    updateItemCount(id, currentCount + 1);
  };

  const handleDecrement = (id) => {
    // Get the current count for the item
    const currentCount = lists.find((list) => list.id === id).items;
    // Ensure the count does not go below 0
    if (currentCount > 0) {
      // Update the count and send a PUT request
      updateItemCount(id, currentCount - 1);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <ul>
      {lists.map((list) => (
        <li class="list-group-item border-0 d-flex align-items-center ps-0 col-md-12">
          <div
            class="d-flex align-items-center flex-grow-1 col-md-9"
            key={list.id}
          >
            <input
              class="form-check-input me-3"
              type="checkbox"
              value=""
              aria-label="..."
              key={list.id}
              onChange={() => handleCheckboxChange(list.id)}
            />
            {list.name}
          </div>
          <div class="input-group">
            <button
              class="btn btn-outline-secondary decrementBtn"
              type="button"
              onClick={() => handleDecrement(list.id)}
            >
              -
            </button>
            <input
              class="form-group form-control typeNumber"
              type="number"
              value={list.items}
            />
            <button
              class="btn btn-outline-secondary incrementBtn"
              type="button"
              onClick={() => handleIncrement(list.id)}
            >
              +
            </button>
          </div>
        </li>
      ))}
      <div class="mt-3">
        <h4>
          Total: <span id="totalCounter"> {totalItems} </span>
        </h4>
      </div>
    </ul>
  );
}

export default ListItem;
