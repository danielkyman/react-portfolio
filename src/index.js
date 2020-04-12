import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import store from "./store";
import { Provider } from "react-redux";

// import axios from "axios";

// import * as contentful from "contentful";

// const client = contentful.createClient({
//   space: "q2fivpqovvam",
//   accessToken: "aq9YgRIXsgEKRLXG8bAC2mM5wChSJddYq2dSbvpS89k",
// });

// client.getEntries().then((entries) => {
//   entries.items.forEach((entry) => {
//     if (entry.fields) {
//       console.log(entry.sys.contentType.sys.id, entry.fields);
//     }
//   });
// });

// const API_BASE_URL = "https://cdn.contentful.com";
// const API_SPACE_ID = "q2fivpqovvam";
// const API_TOKEN = "aq9YgRIXsgEKRLXG8bAC2mM5wChSJddYq2dSbvpS89k";

// axios
//   .get(
//     `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=person`
//   )
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
