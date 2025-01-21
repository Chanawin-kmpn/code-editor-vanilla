/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
type Timeout = ReturnType<typeof setTimeout>;
export const throttle = (func: Function, limit: number) => {
	let lastFunc: Timeout;
	let lastRan: number;
	return function (...args: any) {
		if (!lastRan) {
			func.apply(null, args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(
				function () {
					if (Date.now() - lastRan >= limit) {
						func.apply(null, args);
						lastRan = Date.now();
					}
				},
				limit - (Date.now() - lastRan)
			);
		}
	};
};

export function moveCursorWithinInput(
	input: HTMLInputElement,
	position: number
) {
	// Super old browsers (like, IE?) don't support this.
	if (!input?.setSelectionRange) {
		return;
	}

	input?.focus();
	input?.setSelectionRange(position, position);
}
