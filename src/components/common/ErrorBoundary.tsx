import React, { Component, ErrorInfo, ReactNode } from 'react'
// import { Navigate } from "react-router-dom";

interface Props {
  fallback: string
  children?: ReactNode
}

interface State {
  hasError: boolean,
  error: {};
}



class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, error:{} }

  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary caught an error', error, info)
    this.setState({error:error})
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="loaderWrapper">
          <h2 data-testid="errorboundary">{this.props.fallback}</h2>
          <h2 data-testid="errorboundary">{JSON.stringify(this.state.error)}</h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
