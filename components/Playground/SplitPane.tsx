import React, { useRef } from 'react';
import useDrag from './utils/useDrag';

const DIVIDER_WIDTH = 16;

interface SplitPaneProps {
	className?: string;
	splitRatio: number;
	isFullscreened: boolean;
	leftTitle?: string;
	rightTitle?: string;
	leftChild: React.ReactNode;
	rightChild: React.ReactNode;
}

const SplitPane = ({
	className = '',
	splitRatio,
	isFullscreened,
	leftTitle,
	leftChild,
	rightTitle,
	rightChild,
}: SplitPaneProps) => {
	// กำหนด type ให้กับ refs
	const rulerRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const dividerRef = useRef<HTMLButtonElement>(null);

	const { leftWidth, rightWidth } = useDrag({
		defaultRatio: splitRatio,
		rulerRef,
		containerRef,
		dividerRef,
		dividerWidth: DIVIDER_WIDTH,
	});
	return (
		<>
			<div ref={rulerRef} />
			<div
				className="max-w-full overflow-hidden max-md:rounded-none max-md:border-l-0 max-md:border-r-0"
				style={{ flex: isFullscreened ? 1 : undefined }}
			>
				<div
					ref={containerRef}
					className={`${className} flex flex-col items-stretch h-full md:flex-row`}
				>
					<div className="md:-mr-2" style={{ flex: leftWidth }}>
						{leftChild}
					</div>
					<button ref={dividerRef} className="divider-btn">
						<span className="sr-only">
							Resize editor. Use left/right arrows.
						</span>
					</button>
					<div style={{ flex: rightWidth }}>{rightChild}</div>
				</div>
			</div>
		</>
	);
};

export default SplitPane;
