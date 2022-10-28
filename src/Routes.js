import React, { Suspense, useEffect } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Security } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import {
  Loading,
} from '@saturn/app-components';
import {
  useOidcConfig,
  usePermissions,
} from '@saturn/hooks';
import { getHandleAppStartup, sessionTimeoutWorkflow } from './session';
import { NotFound } from './NotFound';
import { NoPermissions } from './NoPermissions';
import { RequiredAuth } from './SecureRoute';
import { useWorkflow } from '@saturn/workflows';

const getRoutes = (permissions) => {
  /*
   Add your routes here in the form:
    {
      path: '/notifications',
      label: 'Notifications',
      Component: lazy(() => import('./screens/Notifications')),
      permissionMatcher: permissions => (
        permissions.includes('hpe-greenlake-central-ui.notification.create')
      ),
    }
   */

  const routes = [
    {
      path: '/sample',
      label: 'Sample',
      Component: ({name}) => <div>Sample App: {name}</div>,
      permissionMatcher: () => true,
      props: {
        name: "HPE GreenLake"
      }
    },
  ];

  const permissionIds = permissions.map(({ id }) => id);
  return routes.map(
    (route) => ((route.permissionMatcher && !route.permissionMatcher(permissionIds))
      ? { ...route, Component: NoPermissions } : route),
  );
};

const Routes = () => {
  const oidc = useOidcConfig();
  const oktaAuth = new OktaAuth(oidc);

  const { space: spacePermissions } = usePermissions();
  const routes = getRoutes(spacePermissions);

  const { formatMessage } = useIntl();
  const { open } = useWorkflow(sessionTimeoutWorkflow(formatMessage));
  const handleAppStartup = getHandleAppStartup(oktaAuth, open);

  useEffect(() => {
    handleAppStartup();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={() => {}}>
      <RouterRoutes>
        {routes.map(({ path, Component, exact, props }) => (
            <Route
              key={path}
              path={path}
              element={
                <RequiredAuth>
                  <Suspense fallback={<Loading />}>
                    <Component {...props} />
                  </Suspense>
                </RequiredAuth>
              }
              exact={exact}
            />
        ))}
        <Route path='/*' element={<NotFound />} />
      </RouterRoutes>
    </Security>
  );
};

export default Routes;
