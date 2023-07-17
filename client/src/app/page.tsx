import getData from '@/libs/getData';
import Main from './components/Main/Main';

export default async function Page() {
	const data = await getData();
	return <Main data={data} />;
}
