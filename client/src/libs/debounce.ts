type DebouncedFunction<F extends (...args: any[]) => any> = (...args: Parameters<F>) => ReturnType<F>;

export default function debounce<F extends (...args: any[]) => any>(func: F, delay: number): DebouncedFunction<F> {
	let timeoutId: NodeJS.Timeout | undefined;

	return function debounced(...args: Parameters<F>): ReturnType<F> {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);

		return func(...args);
	};
}
