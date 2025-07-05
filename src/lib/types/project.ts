export type ProjectProp = {
	id: number;
	name: string,
	type: string,
	description: string,
	start?: string,
	finish?: string,
	deployUrl?: string,
	repoUrl?: string,
	imageUrl?: string,
	icons?: string[],
	technologies: string[],
}