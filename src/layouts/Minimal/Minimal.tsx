import React from "react"
import { makeStyles, Container } from "@material-ui/core"

import { Topbar } from "./components"

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
	},
	content: {
		padding: theme.spacing(4),
		height: "100%",
	},
}))

const Minimal = (props: any) => {
	const { children } = props

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Topbar />
			<main className={classes.content}>
				<Container maxWidth="lg">{children}</Container>
			</main>
		</div>
	)
}

export default Minimal
