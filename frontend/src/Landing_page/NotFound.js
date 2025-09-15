import React from 'react';

function NotFound() {
    return (
        <div className='container p-5'>
            <div className='row mx-5 text-center'>
                <h1 className='mt-5 fs-2'>404 Not Found</h1>
                <p className='mt-2 mb-5 fs-6 text-muted'>Sorry, the page you are looking for does not exist.</p>
            </div>            
        </div>
      );
}

export default NotFound;