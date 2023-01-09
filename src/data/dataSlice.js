import { configureStore } from "@reduxjs/toolkit";

import counterreducer from'./data';
const store = configureStore({reducer:{dir:counterreducer}})
export default store;