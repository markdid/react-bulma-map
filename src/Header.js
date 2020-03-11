import React from "react"
import {Helmet} from "react-helmet"
import he from "he"

export default ({title, siteName}) => (
    <Helmet>
        <meta charSet="utf-8"/>
        <title>{(title) ? he.decode(title) : ""} {(siteName) ? ` | ${he.decode(siteName)}` : ""}</title>
    </Helmet>
)