import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import useDocumentTitle from "./useDocumentTitle"

function Page(props) {
  const titlePrefix = "App | "
  useDocumentTitle(`${titlePrefix}${props.title}`)
	return <h2>{props.content}</h2>;
}

function Home() {
  return <Page content="This is Home!" title="Home Title" />
}

function About() {
  return <Page content="About!" title="About title" />
}

function Other() {
  return <Page content="And this is Other!" title="Other title" />
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