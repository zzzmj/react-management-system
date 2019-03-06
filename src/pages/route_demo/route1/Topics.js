import React from 'react'
import { Link, Route } from 'react-router-dom'

const Topics = ({ match }) => {
    console.log(match.path)
    console.log(match.url)
    return (
        <div>
            this is Topics
            <ul>
                <li>
                    <Link to={`${match.url}/water`}>嵌套页面--water</Link>
                </li>
                <li>
                    <Link to={`${match.url}/apple`}>嵌套页面--apple</Link>
                </li>
                <li>
                    <Link to={`${match.url}/dog`}>嵌套页面--dog</Link>
                </li>
            </ul>
            <Route
                path={`${match.path}/:name`}
                render={({ match }) => {
                    console.log(match.params)
                    return (
                        <div>
                            <h3>{match.params.name}</h3>
                        </div>
                    )
                }}
            />
        </div>
    )
}

export default Topics
