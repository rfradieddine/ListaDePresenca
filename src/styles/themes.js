

export const light = {
		background: "#d3d3d3",
		text: "#262626",
		primary: "#ea4c89",
}

export const dark = {
		background: "#262626",
		text: "#ffffff",
		primary: "#ea4c89",
}


const themes = {
		light,
		dark,
}

export default function getTheme(theme) {
		return themes[theme]
}