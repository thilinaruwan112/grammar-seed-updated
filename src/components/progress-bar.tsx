'use client';

import NProgress from 'nprogress';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.configure({ showSpinner: false });

        const handleAnchorClick = (event: MouseEvent) => {
            const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
            const currentUrl = window.location.href;
            if (targetUrl !== currentUrl) {
                NProgress.start();
            }
        };

        const handleMutation: MutationCallback = () => {
            const anchorElements = document.querySelectorAll('a');
            anchorElements.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));
        };

        const mutationObserver = new MutationObserver(handleMutation);
        mutationObserver.observe(document, { childList: true, subtree: true });

        // Initial check in case the component loads after the page is interactive
        handleMutation([]);

        return () => {
            mutationObserver.disconnect();
            const anchorElements = document.querySelectorAll('a');
            anchorElements.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
        };
    }, []);

    useEffect(() => {
        NProgress.done();
    }, [pathname, searchParams]);
    
    return null;
}
