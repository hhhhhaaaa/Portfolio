import React from "react";

export default function header() {
  return (
    <div>
      <ul
        class="
        container-fluid
        p-0
        navbar-nav
        justify-contenter-center
        align-self-center
        d-inline-flex
        row
        flex-row flex-wrap
        mw-100
      "
      >
        <li class="nav-item border border-warning d-inline-flex col-3">
          <a href=".">Douglas Joseph Lubaway</a>
        </li>
        <li class="nav-item border border-warning d-inline-flex col-3">
          <a href="#about">About Me</a>
        </li>
        <li class="nav-item border border-warning d-inline-flex col-3">
          <a href="#work">
            Work I <br />
            Have Done
          </a>
        </li>
        <li class="navButton nav-item border border-warning d-inline-flex col-3">
          <a href="#contact">Contact Information</a>
        </li>
      </ul>
    </div>
  );
}
