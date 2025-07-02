'use client'
import React from 'react';

const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`[withLogger] ${WrappedComponent.name} mounted`);
    }

    componentDidUpdate(prevProps, prevState) {
      console.log(`[withLogger] ${WrappedComponent.name} updated`);
    }

    componentWillUnmount() {
      console.log(`[withLogger] ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogger;
