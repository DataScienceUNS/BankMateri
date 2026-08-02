"use client";

import { UAParser } from 'ua-parser-js';

/**
 * @function getUserAnalyticsClient
 * @description A client-side utility function that captures comprehensive user analytics data
 *              directly from the browser environment. Designed for Next.js client components
 *              to gather device information, screen dimensions, and user preferences without
 *              requiring server-side processing.
 *
 *              Uses the `ua-parser-js` library for User-Agent parsing and leverages browser
 *              APIs (navigator, window) to collect real-time client information.
 *
 * @returns {ClientAnalyticsData} An object containing detailed client analytics:
 *          - `userAgent`: Raw User-Agent string from the browser
 *          - `browser`: Browser name and version (e.g., "Chrome 120.0.0.0")
 *          - `os`: Operating system name and version (e.g., "Windows 10")
 *          - `deviceType`: Device category ('mobile' | 'tablet' | 'console' | 'smarttv' | 'wearable' | 'embedded' | 'desktop')
 *          - `screenWidth`: Browser window screen width in pixels
 *          - `screenHeight`: Browser window screen height in pixels
 *          - `language`: User's preferred language (e.g., "en-US")
 *
 * @throws {Error} If the function is called on the server-side (outside browser environment).
 * @throws {Error} If the UAParser fails to parse the User-Agent string.
 *
 * @example
 * // In a Next.js client component
 * 'use client'
 *
 * import { getUserAnalyticsClient } from '@/utils/analytics';
 *
 * export default function AnalyticsComponent() {
 *   const analytics = getUserAnalyticsClient();
 *
 *   return (
 *     <div className="analytics-card">
 *       <h3>Device Information</h3>
 *       <p>Device Type: {analytics.deviceType}</p>
 *       <p>Browser: {analytics.browser}</p>
 *       <p>OS: {analytics.os}</p>
 *       <p>Screen: {analytics.screenWidth} x {analytics.screenHeight}</p>
 *       <p>Language: {analytics.language}</p>
 *     </div>
 *   );
 * }
 *
 * @example
 * // Collecting analytics on component mount
 * 'use client'
 *
 * import { useEffect } from 'react';
 * import { getUserAnalyticsClient } from '@/utils/analytics';
 *
 * export default function TrackingComponent() {
 *   useEffect(() => {
 *     try {
 *       const analytics = getUserAnalyticsClient();
 *
 *       // Send analytics to tracking service
 *       sendToAnalyticsService({
 *         event: 'page_view',
 *         device_type: analytics.deviceType,
 *         browser: analytics.browser,
 *         os: analytics.os,
 *         screen: `${analytics.screenWidth}x${analytics.screenHeight}`,
 *         language: analytics.language
 *       });
 *     } catch (error) {
 *       console.error('Failed to capture client analytics:', error);
 *     }
 *   }, []);
 *
 *   return <div>Tracking user analytics...</div>;
 * }
 *
 * @example
 * // Conditional analytics for responsive design
 * 'use client'
 *
 * import { getUserAnalyticsClient } from '@/utils/analytics';
 *
 * export function ResponsiveComponent() {
 *   const analytics = getUserAnalyticsClient();
 *
 *   const isMobile = analytics.deviceType === 'mobile';
 *   const isTablet = analytics.deviceType === 'tablet';
 *   const isDesktop = analytics.deviceType === 'desktop';
 *
 *   const layout = isMobile ? 'mobile-layout' :
 *                  isTablet ? 'tablet-layout' : 'desktop-layout';
 *
 *   return <div className={layout}>Responsive content</div>;
 * }
 *
 * @example
 * // Error handling for server-side safety
 * 'use client'
 *
 * import { getUserAnalyticsClient } from '@/utils/analytics';
 *
 * export function SafeAnalyticsComponent() {
 *   let analytics;
 *   let error;
 *
 *   try {
 *     analytics = getUserAnalyticsClient();
 *   } catch (err) {
 *     error = err;
 *     console.warn('Client analytics unavailable:', err.message);
 *   }
 *
 *   if (error) {
 *     return <div>Analytics unavailable in server environment</div>;
 *   }
 *
 *   return <div>Analytics: {analytics?.browser}</div>;
 * }
 *
 * @remarks
 * - **IMPORTANT**: This function MUST be called in a client component (browser environment).
 * - The function will throw an error if called on the server side or during SSR.
 * - Always use the `'use client'` directive at the top of the component file.
 * - Consider using the `useEffect` hook or event handlers to call this function safely.
 * - For server-side analytics, use `getUserAnalyticsServer()` instead.
 * - Device type defaults to 'desktop' when the User-Agent doesn't specify a device type.
 * - Screen dimensions reflect the browser viewport, not the device's physical screen resolution.
 * - Language is derived from `navigator.language` and follows the BCP 47 language tag format.
 * - All string values fall back to 'Unknown' when data cannot be extracted.
 * - Performance is minimal as it runs synchronously and uses cached browser APIs.
 */
export interface ClientAnalyticsData {
    userAgent: string;
    browser: string;
    os: string;
    deviceType: 'mobile' | 'tablet' | 'console' | 'smarttv' | 'wearable' | 'embedded' | 'desktop';
    screenWidth: number;
    screenHeight: number;
    language: string;
}


export function getUserAnalyticsClient(): ClientAnalyticsData {
    if (typeof window === 'undefined') {
        throw new Error("getUserAnalyticsClient hanya dapat dipanggil di lingkungan Client-Side (Browser).");
    }

    const userAgent = navigator.userAgent;
    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const browser = result.browser.name
        ? `${result.browser.name} ${result.browser.version || ''}`.trim()
        : 'Unknown';

    const os = result.os.name
        ? `${result.os.name} ${result.os.version || ''}`.trim()
        : 'Unknown';

    const deviceType = (result.device.type as ClientAnalyticsData['deviceType']) || 'desktop';

    return {
        userAgent,
        browser,
        os,
        deviceType,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        language: navigator.language,
    };
}