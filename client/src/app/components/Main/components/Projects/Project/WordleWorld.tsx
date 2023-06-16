import Project, { ProjectPropsType } from './Project';

export const WordleWorldProps: ProjectPropsType = {
	name: 'WordleWorld',
	ref: null,
};

export default function WordleWorld({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
