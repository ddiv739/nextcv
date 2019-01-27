import Header from '../Header';

const BaseLayout = (props) => {
    return (
        <div>
            <Header />
            <main>
                <div>
                    {props.children}
                </div>
            </main>
        </div>
    )
}

export default BaseLayout