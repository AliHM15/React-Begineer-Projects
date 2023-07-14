import React from "react"
import ReactDom from "react-dom"

const navbar= (
    <div>
        <li>My list</li>
        <ul>
            <li>Hello 1</li>
            <li>Hello 1</li>
            <li>Hello 1</li>
        </ul>
    </div>
)


ReactDom.render(navbar, document.getElementById("root"))