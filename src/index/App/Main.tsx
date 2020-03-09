import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Request from './Request';
import History from './History';
import Home from './Home';

export default function Main() {
  return (
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="flex flex-col">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <Switch>
                  <Route exact path="/" component={Home} />} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/request" component={Request} />
                  <Route exact path="/history" component={History} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
