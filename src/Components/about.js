import React from "react";

export default function about() {
  return (
    <div>
      <header
        id="about"
        class="container-fluid p-0 flex-row flex-wrap d-inline-flex mw-100"
      >
        <img
          class="
          w-25
          mb-0
          img-thumbnail
          headerButton
          border border-warning
          d-inline-flex
          col-4
        "
          src="./doug-face.jpg"
        />
        <p class="aboutText border border-warning col-8 d-inline-flex m-0 p-4">
          Hello! My name is Douglas Joseph Lubaway. I am a Junior Full-Stack Web
          Developer with some experience in all sides, several projects and
          contributions to public projects, and beginning a Full-Stack
          Javascript Bootcamp with Michigan State University in coordination
          with Trinity Group.{" "}
        </p>
        <div class="name headerButton border border-warning d-inline-flex col-12"></div>
      </header>
    </div>
  );
}
