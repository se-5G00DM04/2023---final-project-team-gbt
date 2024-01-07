import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import ListItem from "./ListItem";
import ListAdd from "./ListAdd";

function App() {
  return (
    <div>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <div class="card-body p-4">
                  <p class="mb-2">
                    <span class="h2 me-2">Shopping List</span>
                    <span class="badge bg-danger">shopping</span>
                  </p>
                  <p class="text-muted pb-2">16/12/2023 • TAMPERE</p>
                  <ListAdd />
                  <ul class="list-group rounded-0">
                    <ListItem />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
