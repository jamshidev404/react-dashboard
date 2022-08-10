import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './style.css'
import App from "./App";
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxBYVF2R2FJelRyfF9DZUwgOX1dQl9hSXZTf0VlWn9aeH1UR2Q=');

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);