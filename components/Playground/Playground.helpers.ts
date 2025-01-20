import { useMemo } from 'react';

interface UsePaneDataProps {
	mode: 'default' | 'react';
	htmlCode: string;
	setHtmlCode: (code: string) => void;
	cssCode: string;
	setCssCode: (code: string) => void;
	jsCode: string;
	setJsCode: (code: string) => void;
}
export function usePaneData({
	mode,
	htmlCode,
	setHtmlCode,
	cssCode,
	setCssCode,
	jsCode,
	setJsCode,
}: UsePaneDataProps) {
	const panes = useMemo(() => {
		const paneData = [
			{
				language: 'markup',
				label: 'HTML',
				code: htmlCode,
				handleUpdate: setHtmlCode,
			},
			{
				language: 'css',
				label: 'CSS',
				code: cssCode,
				handleUpdate: setCssCode,
			},
		];

		if (mode === 'react') {
			paneData.unshift({
				language: 'jsx',
				label: 'JSX',
				code: jsCode,
				handleUpdate: setJsCode,
			});
		} else {
			paneData.push({
				language: 'javascript',
				label: 'JS',
				code: jsCode,
				handleUpdate: setJsCode,
			});
		}

		return paneData.filter(({ code }) => typeof code === 'string');
	}, [mode, htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode]);

	if (panes.length === 0 || panes.length === 3) {
		console.error(
			'Passed the wrong number of code snippets! I only understand 1 or 2 code snippets at once'
		);
	}

	return panes;
}
