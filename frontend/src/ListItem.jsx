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
            />
            {list.name}
          </div>
          <div class="input-group">
            <button
              class="btn btn-outline-secondary decrementBtn"
              type="button"
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
