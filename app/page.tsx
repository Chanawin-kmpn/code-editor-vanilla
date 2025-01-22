import Playground from '@/components/Playground/Playground';

export default function Home() {
	const htmlCode = `  
	<div class="card">  
	  <img src="/api/placeholder/300/200" alt="Card image" class="card-image">  
	  <div class="card-content">  
		<h2>Card Title</h2>  
		<p>This is a simple card component built with HTML and CSS only.</p>  
		<button class="card-button">Learn More</button>  
	  </div>  
	</div>  
	  `;

	const cssCode = `  
	.card {  
	  max-width: 300px;  
	  border-radius: 8px;  
	  overflow: hidden;  
	  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);  
	  background: white;  
	}  
	
	.card-image {  
	  width: 100%;  
	  height: 200px;  
	  object-fit: cover;  
	}  
	
	.card-content {  
	  padding: 1.5rem;  
	}  
	
	.card-content h2 {  
	  margin: 0 0 0.5rem;  
	  color: #1a1a1a;  
	  font-size: 1.25rem;  
	}  
	
	.card-content p {  
	  margin: 0 0 1rem;  
	  color: #666;  
	  line-height: 1.5;  
	}  
	
	.card-button {  
	  background: #4f46e5;  
	  color: white;  
	  border: none;  
	  padding: 0.5rem 1rem;  
	  border-radius: 4px;  
	  cursor: pointer;  
	  font-weight: 500;  
	}  
	
	.card-button:hover {  
	  background: #4338ca;  
	}  
	  `.trim();
	return (
		<div>
			{/* <Playground
				id="demo-1"
				title="CodePen Layout Demo"
				html={initialHtml}
				css={initialCss}
				js={initialJs}
				mode="default"
				layoutMode="codepen"
				size="normal"
				centered={true}
				boxSizing="border-box"
				splitRatio="0.5"
				startFullscreened={false}
			/> */}
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
	);
}
