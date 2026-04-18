import React from 'react';

const NoMatch = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f8f7f2] px-6">
            <div className="minimal-card max-w-lg p-8 text-center">
                <p className="section-label mb-3">404</p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                    Page not found
                </h2>
                <p className="mt-3 text-zinc-600">
                    The page you requested does not exist anymore.
                </p>
                <a
                    href="/"
                    className="btn1 mt-6 inline-flex rounded-full px-5 py-2.5 text-sm"
                >
                    Back Home
                </a>
            </div>
        </div>
    );
};

export default NoMatch;
