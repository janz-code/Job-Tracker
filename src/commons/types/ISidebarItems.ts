export default interface ISidebar {
	items: ISidebarCategory[];
}
export interface ISidebarCategory {
	name: string;
	basePath: string;
	items: ISidebarNavElements[];
}
export interface ISidebarNavElements {
	label: string;
	icon: string;
	path: string;
}
