# 嵌套路由

```tsx
import React from 'react';
import type { RouteComponentProps, RouteProps } from 'react-router';
import { Redirect, Route, Switch } from 'react-router';

type ReactPageComponent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<unknown>;

interface RouterConfigProps extends RouteProps {
  path: string;
  redirect?: string;
  key?: string;
  name?: string;
  component?: ReactPageComponent;
  children?: RouterConfigProps[];
}

const Routes: React.FC = () => {
  const renderRoutes = (routes: RouterConfigProps[]) => {
    return (
      <Switch>
        {
          routes.map(route => {
            if (route.redirect) {
              return <Redirect key={route.path} path={route.path} to={route.redirect} />;
            } else if (route.children?.length) {
              const Component = route.component || 'div';
              const SubRoute = (props: RouteComponentProps<any>) => (
                <Component {...props}>
                  {renderRoutes(route.children || [])}
                </Component>
              );
              return <Route path={route.path} key={route.path} component={SubRoute} />;
            } else {
              return <Route {...route} key={route.path} />;
            }
          })
        }
      </Switch>
    );
  }

  return renderRoutes(RouteConfig);
};

Routes.displayName = 'Routes';
export default Routes;
```