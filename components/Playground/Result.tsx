import React from 'react';
import { useEffect, useState } from 'react';
import constructSnippet from './utils/constructSnippet';
import useDebouncedValues from '@/hooks/use-debounced-values';

type ResultProps = {
	id: string;
	codeMap: {
		markup: string | undefined;
		css: string | undefined;
		javascript: string | undefined;
	};
	mode: 'default' | 'react';
	centered: boolean;
	stretched: boolean;
	boxSizing: string;
	layoutMode: 'codepen' | 'side-by-side' | 'vertical-stack' | 'tabbed';
	isFullscreened: boolean;
	style?: React.CSSProperties;
};

const Result = React.memo(function Result({
	id,
	codeMap,
	mode,
	centered,
	stretched,
	boxSizing,
	layoutMode,
	isFullscreened,
	style = {},
}: ResultProps) {
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);

		try {
			const code = constructSnippet({
				id,
				codeMap,
				mode,
				centered,
				boxSizing,
			});

			setCode(code);

			setError(null);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			} else {
				setError(String(error));
			}
		}
	}, [id, codeMap, mode, boxSizing, centered]);

	useEffect(() => {
		function waitForMessage() {
			if (typeof window !== 'undefined') {
				window.addEventListener('message', (data) => {
					const frameId = `frame-${id}`;

					if (data.data.source !== frameId) {
						return;
					}

					if (data.data.message.type === 'error') {
						setError(data.data.message.data);
					}

					setLoading(false);
				});
			}
		}

		waitForMessage();
	}, [id]);

	const resize =
		layoutMode === 'codepen'
			? isFullscreened
				? 'horizontal'
				: 'both'
			: undefined;

	return (
		<div
			style={{ ...style }}
			className={`relative rounded-[4px] bg-white resize-${resize} ${stretched && 'flex-1'} h-[${stretched ? '100%' : undefined}] w-full max-w-full min-h-[250px] my-0 mx-auto overflow-hidden`}
		>
			{loading && (
				<div className="absolute z-50 top-4 right-4 opacity-50 text-black">
					Loading...
				</div>
			)}
			<iframe
				title={'example'}
				srcDoc={code!}
				loading="lazy"
				className="w-full h-full block absolute top-0 left-0"
			/>
			{error && <div>{error}</div>}
		</div>
	);
});

const DebouncedResult = (props: ResultProps) => {
	const debouncedProps = useDebouncedValues(250, props);

	return <Result {...debouncedProps} />;
};

export default DebouncedResult;
