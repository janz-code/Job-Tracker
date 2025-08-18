import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./configuration/app.config";
import { App } from "./commons/layout/app/app.layout";

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
