import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import SidebarComponent from "../../components/sidebar/sidebar";

@Component({
	selector: "janz-root",
	imports: [RouterOutlet, SidebarComponent],
	templateUrl: "./app.layout.html",
	styleUrl: "./app.style.scss",
})
export class App {
	readonly title = signal("Job Tracker");
}
