import { Component, Input, signal, OnInit } from "@angular/core";
import sidebarContent from "../../content/sidebar.content";
import { ISidebarCategory } from "../../types/ISidebarItems";
import {RouterLink} from "@angular/router";

@Component({
	selector: "janz-sidebar",
	templateUrl: "./sidebar.html",
	styleUrl: "./sidebar.scss",
	standalone: true,
	imports: [
		RouterLink
	]
})
export default class SidebarComponent implements OnInit {
	@Input() title: string = "no title";
	activePath = signal<string>("/");
	isOpen = signal<boolean>(false);
	status = signal<string>("close");
	readonly icon: string = "/images/icon.png";
	readonly items: ISidebarCategory[];
	constructor() {
		this.items = sidebarContent.items;
	}
	handle() {
		this.status.update(() => (this.isOpen() ? "close" : "open"));
		this.isOpen.update((value) => !value);
	}
	ngOnInit(): void {
		this.activePath.update(() => window.location.pathname.substring(1));
	}
}
