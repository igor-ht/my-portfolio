import Project, { ProjectPropsType } from './Project';

export const OrquiaProps: ProjectPropsType = {
	name: 'Orquia',
	ref: null,
};

export default function Orquia({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
