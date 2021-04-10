import express from "express"
import { parse } from "url"
import next from "next"
// import path from 'path'
import "dotenv/config"
import { IncomingMessage, ServerResponse } from "node:http"

const port = parseInt(process.env.PORT || "3000", 10)
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server
		.all("*", (req: IncomingMessage, res: ServerResponse) => {
			const parsedUrl = parse(req.url!, true)
			// const { pathname, query } = parsedUrl

			handle(req, res, parsedUrl)
		})
		.listen(port, () => {
			// tslint:disable-next-line:no-console
			console.log(
				`> Server listening at http://localhost:${port} as ${
					dev ? "development" : process.env.NODE_ENV
				}`
			)
		})
})
