'use client';
import React, { useMemo, useState } from 'react';
import Result from './Result';
import Pane from './Pane';
import { usePaneData } from './Playground.helpers';

interface PlaygroundProps {
	id: string;
	title: string;
	html: string;
	css: string;
	js: string;
	mode: 'default' | 'react';
	layoutMode: 'codepen' | 'side-by-side' | 'vertical-stack' | 'tabbed';
	size: 'normal' | 'wide';
	centered: boolean;
	boxSizing: 'content-box' | 'border-box';
	splitRatio: string;
	resultStyle: { [key: string]: string | number | undefined };
	stacked: boolean;
	startFullscreened: boolean;
	hideTabCheckbox: boolean;
}

const Playground = ({
	id,
	title,
	html,
	css,
	js,
	mode = 'default',
	layoutMode,
	size = 'normal',
	boxSizing = 'border-box',
	splitRatio = '0.5',
	resultStyle = {},
	stacked,
	startFullscreened,
	hideTabCheckbox,
	...rest
}: PlaygroundProps) => {
	const [htmlCode, setHtmlCode] = useState(html?.trim());
	const [cssCode, setCssCode] = useState(css?.trim());
	const [jsCode, setJsCode] = useState(js?.trim());

	const [randomId, setRandomId] = useState('initial');

	const [isFullscreened, toggleFullscreen] = useFullscreen(startFullscreened);

	// TODO สร้างปุ่มที่ใช้ handleFormat

	// TODO สร้างข้อมูลที่ใช้ในการส่งข้อมูลที่ใช้กับ layout ที่หลากหลาย

	const paneData = usePaneData({
		mode,
		htmlCode,
		setHtmlCode,
		cssCode,
		setCssCode,
		jsCode,
		setJsCode,
	});

	function handleReset() {
		setHtmlCode(html?.trim());
		setCssCode(css?.trim());
		setJsCode(js?.trim());
	}

	const codeMap = useMemo(
		() => ({
			markup: htmlCode,
			css: cssCode,
			javascript: jsCode,
		}),
		[htmlCode, cssCode, jsCode]
	);

	layoutMode =
		layoutMode || (paneData.length === 1 ? 'side-by-side' : 'codepen');

	const stretchResults = isFullscreened || layoutMode !== 'codepen';

	// สร้าง component ฝั่งขวาที่เป็นส่วนของ Result
	const resultPane = (
		<Pane
			title="Result"
			style={{ height: stretchResults ? '100%' : undefined }}
			actions={
				<RefreshButton
					handleRefresh={() => {
						setRandomId(Math.random().toString());
					}}
				/>
			}
		>
			<Result />
		</Pane>
	);

	let contents;
	// สร้างเนื้อหาสำหรับ Codeeditor จาก layoutMode
	switch (layoutMode) {
		case 'codepen': {
			contents = (
				<>
					{/* Splitpane ที่รับเป็น CodeEdior  ซ้ายและขวา ซึ่ง ผลลัพธ์จะอยู่ข้างล่าง */}
				</>
			);
			break;
		}

		case 'side-by-side': {
			contents = (
				<>
					{/* Splitpane จะรับ CodeEditor อันเดียว อยู่ทางด้านซ้าย และผลลัพธ์จะอยู่ด้านขวา */}
				</>
			);
			break;
		}

		case 'tabbed': {
			contents = (
				<>
					{/* Splitpane จะรับ CodeEditor ทั้งสองอันอยู่ทางซ้ายโดยใช้ Tab ในการเลือก CodeEditor และ ผลลัพธ์จะอยู่ด้านขวา */}
				</>
			);
		}

		case 'vertical-stack': {
			contents = (
				<>
					{/* Splitpane จะรับ CodeEditor ทั้งสองอย่างแต่ว่าเป็นแนวตั้งโดยจะเป็นทางซ้ายจะเรียงโดย css และ html เป็นแนวตั้ง ส่วนผลลัพธ์ก็จะอยู่ทางขวา */}
				</>
			);
		}
	}

	return (
		<div>
			Toolbar
			{contents}
		</div>
	);
};

export default Playground;
