import React from 'react';
import { useRouteMatch, generatePath } from 'react-router';

const generatePage = (page) => {
  const component = () => require(`./pages/${page}.js`).default;

  try {
    return React.createElement(component());
  } catch (error) {
    console.warn(error);
    return React.createElement(() => 404);
  }
};

export default function PageRenderer() {
  const {
    params: { page },
  } = useRouteMatch();

  return generatePage(page);
}
