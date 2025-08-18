import { Component, Input, signal } from "@angular/core";
import sidebarContent from "../../content/sidebar.content";
import { ISidebarCategory } from "../../types/ISidebarItems";

@Component({
	selector: "janz-sidebar",
	templateUrl: "./sidebar.html",
	styleUrl: "./sidebar.scss",
	standalone: true,
})
export default class SidebarComponent {
	@Input() title: string = "no title";
	isOpen = signal<boolean>(true);
	status = signal<string>("open");
	readonly icon: string = "/images/icon.png";
	readonly items: ISidebarCategory[];
	constructor() {
		this.items = sidebarContent.items;
	}
	handle() {
		this.status.update(() => (this.isOpen() ? "close" : "open"));
		this.isOpen.update((value) => !value);
	}
}
