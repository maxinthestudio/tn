import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps extends RouteProps {
  components: Array<any>;
  exact: boolean;
  path: string;
}

export const Layout = ({ components, ...rest }: LayoutProps) => (
  <Route
    {...rest}
    render={() => (
      <section >
        <Header />
        <section>
          {components.map((Component: any, i: number) => (
            <Component key={i} />
          ))}
        </section>
        <Footer />
      </section>
    )}
  />
);


export default Layout;