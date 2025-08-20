import ISidebar from "../types/ISidebarItems";

const sidebarContent: ISidebar = {
	items: [
		{
			name: "home",
			basePath: "",
			items: [{ icon: "icon-layout-dashboard", label: "dashboard", path: "" }],
		},
		{
			name: "configuration",
			basePath: "config",
			items: [
				{ icon: "icon-user-round-pen", label: "profile", path: "/profile" },
				{ icon: "icon-bolt", label: "system", path: "/system" },
			],
		},
		{
			name: "postulations",
			basePath: "postulations",
			items: [
				{ icon: "icon-file-plus-2", label: "create", path: "/create" },
				{ icon: "icon-list-collapse", label: "smart list", path: "/list" },
				{ icon: "icon-layout-list", label: "detailed list", path: "/detailed" },
			],
		},
	],
};

export default sidebarContent;
