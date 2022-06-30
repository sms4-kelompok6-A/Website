import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Dashboard,
  Destinations,
  Events,
  Account,
  AddDestination,
  UpdateDestination,
  AddEvent,
  DestinationDetail,
  Order,
  UpdateEvent,
  EventDetail,
  OrderDetail,
  Main,
} from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:id" element={<DestinationDetail />} />
      <Route path="/destinations/add" element={<AddDestination />} />
      <Route path="/destinations/update/:id" element={<UpdateDestination />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/events/add" element={<AddEvent />} />
      <Route path="/events/update/:id" element={<UpdateEvent />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/orders/:id" element={<OrderDetail />} />
      <Route path="/users" element={<Account />} />
    </Routes>
  </BrowserRouter>
);
