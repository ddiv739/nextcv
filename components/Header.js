import React from 'react'
import Link from 'next/link'

const Login = () => {
    return (
        <span className="clickable">Login </span>
    )
}

const Logout = () => {
    return (
        <span className="clickable">Logout</span>
    )
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <Link href="/">
                    <a> Home </a>
                </Link>
                <Link href="/project_list">
                    <a> Project List </a>
                </Link>
                <Link href="/about">
                    <a> About </a>
                </Link>
                <Link href="/blog">
                    <a> Blog </a>
                </Link>
                <Login />
                <Logout />
            </div>
        )
    }
}

export default Header 