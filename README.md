# React Notifications Integrated with Redux


## Install

Install via npm:

```
npm install react-notification-redux
```

Install via yarn:

```
yarn add react-notification-redux
```

## Usage

This library is designed in the way, that you only need to include ```<Notification />``` component once 
in your app, somewhere in your high level component; then you need to add a ```notificationReducer```
to your `combineReducers` function, and you are done.
Now you are able to dispatch a `showNotification` action from anywhere in your app,
and it will show a notification to the user.

So here are the steps:

#### 1. Import Notification component at the top of your file:

```js
import {Notification} from 'react-notification-redux'
```

And then add it somewhere in your render function:

```js
render() {
  ...
  ...
  <Notification />
  ...
  ...
}
```

#### 2. Include a reducer into your global reducers file:

```js
...
import {notificationReducer} from 'react-notification-redux';
...
const reducers = combineReducers({
  ...
  ...
  notification: notificationReducer
});
```

#### 3. Somewhere in your application, where you need to show the notification, just dispatch an action specifying the message to show:

```js
...
import {showNotification} from 'react-notification-redux';
...
...
  dispatch(showNotification('Hello World'));
...
```


