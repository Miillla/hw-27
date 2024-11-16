import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>ERROR....ooops something wrong</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
