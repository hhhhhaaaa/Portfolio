import React from "react";

export default function project(props) {
  return (
    <div
      id={props.title}
      class="firstWorkButton border border-warning col-12 row"
    >
      <img
        class="
          border border-warning
          d-inline-flex
          col-4
        "
        src={props.title + ".png"}
      />
      <div class="card-body m-0 firstWorkText border border-warning col-8">
        <h1 class="card-title">{props.name}</h1>
        <a
          class="card-text"
          href={`https://github.com/hhhhhaaaa/${props.title}`}
        >
          Github Link
        </a>
        <br />
        <a class="card-text" href={props.link}>
          Project Link
        </a>
      </div>
    </div>
  );
}
