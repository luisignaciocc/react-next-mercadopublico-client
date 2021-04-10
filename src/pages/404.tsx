import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(4),
	},
	content: {
		paddingTop: 150,
		textAlign: "center",
	},
	image: {
		marginTop: 50,
		display: "inline-block",
		maxWidth: "100%",
		width: 560,
	},
}))

const ErrorPage = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container justify="center" spacing={4}>
				<Grid item lg={6} xs={12}>
					<div className={classes.content}>
						<Typography variant="h1">
							{"La página que buscas no está aquí."}
						</Typography>
						<Typography variant="subtitle2">
							{`Verifica que no cometiste un error en la ruta.\nTrata de usar la navegación siempre que sea posible.`}
						</Typography>
						<img
							alt="Under development"
							className={classes.image}
							src={"/images/page_not_found.svg"}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default ErrorPage
