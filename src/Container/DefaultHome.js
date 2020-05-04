import React, { Component, Suspense } from 'react';
import { withRouter } from 'react-router-dom'
import '../Style/Tailwind/output.css';
import { Container } from "../Style/StyledComponents/MainPage";


const DefaultHeader = React.lazy(() => import('./DefaultHeader'))
const DefaultAside = React.lazy(() => import('./DefaultAside'))
const DefaultFooter = React.lazy(() => import('./DefaultFooter'))

class DefaultLayout extends Component {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    render() {
        return (
            <React.Fragment>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultHeader />
                    </Suspense>
                </div>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultAside />
                    </Suspense>
                </div>
                <div className=''>
                    <Suspense fallback={this.loading()}>
                        <DefaultFooter />
                    </Suspense>
                </div>
                <Container>
                    <main>
                        {this.props.children}
                    </main>
                </Container>
            </React.Fragment>
        )
    }
}

export default withRouter(DefaultLayout);

