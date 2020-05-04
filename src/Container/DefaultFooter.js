import React, { Component } from 'react';
import '../Style/Tailwind/output.css';

class DefaultFooter extends Component {

    render() {
        return (

            <>
                <div className='flex md:flex-row'>
                    <div className='w-full bg-gray-400 shadow-lg fixed bottom-0'>
                        <span className='flex justify-center'>LookingFor - DEV Made with ❤ &copy;{new Date().getFullYear()}</span>
                    </div>
                </div>
            </>
        )
    }

}

export default DefaultFooter;
