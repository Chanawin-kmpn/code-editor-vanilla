import Playground from '@/components/Playground/Playground';

export default function Home() {
	const htmlCode = `  
	<style>
  .pink.box {
    margin-top: -32px;
    margin-left: -32px;
  }
</style>

<main>
  <div class="pink box"></div>
</main>
	  `;

	const cssCode = `  
	main {
  width: 200px;
  height: 200px;
  border: 3px solid;
}

.box {
  width: 50%;
  height: 50%;
  background: white;
}
.pink.box {
  border: 3px solid deeppink;
}
	  `.trim();
	return (
		<div className="max-w-[90rem] mx-auto my-48">
			<h1 className="text-4xl text-center mb-8">Playground</h1>
			<div>
				<h2 className="text-2xl  mb-4">CodePen Layout Demo</h2>
				<Playground
					id="demo-1"
					title="CodePen Layout Demo"
					html={htmlCode}
					css={cssCode}
					mode="default"
					layoutMode="codepen"
					size="normal"
					centered={true}
					boxSizing="border-box"
					splitRatio="0.5"
					startFullscreened={false}
				/>
			</div>
			<div>
				<h2 className="text-2xl  mb-4">Side by side Layout Demo</h2>
				<Playground
					id="demo-2"
					title="Side by side Layout Demo"
					html={htmlCode}
					mode="default"
					layoutMode="side-by-side"
					size="normal"
					centered={true}
					boxSizing="border-box"
					splitRatio="0.5"
					startFullscreened={false}
				/>
			</div>

			<div>
				<h2 className="text-2xl  mb-4">Tabbed Layout Demo</h2>
				<Playground
					id="demo-3"
					title="Tabbed Layout Demo"
					html={htmlCode}
					css={cssCode}
					mode="default"
					layoutMode="tabbed"
					size="normal"
					centered={true}
					boxSizing="border-box"
					splitRatio="0.5"
					startFullscreened={false}
				/>
			</div>
			<div>
				<h2 className="text-2xl  mb-4">Vertical stack Layout Demo</h2>
				<Playground
					id="demo-4"
					title="Vertical stack Layout Demo"
					html={htmlCode}
					css={cssCode}
					mode="default"
					layoutMode="vertical-stack"
					size="normal"
					centered={true}
					boxSizing="border-box"
					splitRatio="0.5"
					startFullscreened={false}
				/>
			</div>
		</div>
	);
}
