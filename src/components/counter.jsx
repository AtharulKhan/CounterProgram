import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    age: 20,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
