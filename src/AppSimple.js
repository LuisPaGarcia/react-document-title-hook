import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import useDocumentTitle from "./useDocumentTitle"

function Page(props) {
	return <h2>{props.content}</h2>;
}

function Home() {
  useDocumentTitle("Home title")
  return <Page content="This is Home!" />
}

function About() {
  useDocumentTitle("About title")  
  return <Page content="About!" />
}

function Other() {
  useDocumentTitle("Other title")
  return <Page content="And this is Other!" />
}


function App() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/other">Other</Link>
					</li>
				</ul>

				<hr />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/other" component={Other} />
			</div>
		</Router>
	);
}

export default App;