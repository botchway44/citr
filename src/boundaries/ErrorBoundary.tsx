import { Component, ErrorInfo, ReactElement } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactElement;
}

class ErrorBoundary extends Component<IProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to="/">Click to go back to homepage</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
