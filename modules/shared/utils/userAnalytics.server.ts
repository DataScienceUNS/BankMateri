import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

export interface UserAnalyticsData {
    ip: string;
    userAgent: string;
    browser: string;
    os: string;
    deviceType: 'mobile' | 'tablet' | 'console' | 'smarttv' | 'wearable' | 'embedded' | 'desktop';
}

/**
 * @function getUserAnalyticsServer
 * @description A server-side utility function that extracts and aggregates user analytics data
 *              from incoming HTTP request headers. Designed for Next.js server components and
 *              API routes to capture comprehensive client information including IP address,
 *              browser details, operating system, and device type.
 *
 *              Uses the `ua-parser-js` library for User-Agent parsing and follows standard
 *              reverse-proxy header conventions for IP detection.
 *
 * @returns {Promise<UserAnalyticsData>} A promise that resolves to an object containing:
 *          - `ip`: Client IP address (supports X-Forwarded-For, CF-Connecting-IP, X-Real-IP headers)
 *          - `userAgent`: Raw User-Agent string from the request
 *          - `browser`: Browser name and version (e.g., "Chrome 120.0.0.0")
 *          - `os`: Operating system name and version (e.g., "Windows 10")
 *          - `deviceType`: Device category ('mobile' | 'tablet' | 'console' | 'smarttv' | 'wearable' | 'embedded' | 'desktop')
 *
 * @throws {Error} If the headers() function fails or if there are issues accessing request headers.
 * @throws {Error} If the UAParser fails to parse the User-Agent string.
 *
 * @example
 * // In a Next.js server component
 * export default async function AnalyticsPage() {
 *   const analytics = await getUserAnalyticsServer();
 *
 *   return (
 *     <div>
 *       <p>Device: {analytics.deviceType}</p>
 *       <p>Browser: {analytics.browser}</p>
 *       <p>OS: {analytics.os}</p>
 *       <p>IP: {analytics.ip}</p>
 *     </div>
 *   );
 * }
 *
 * @example
 * // In a Next.js API route
 * export async function POST(request: Request) {
 *   const analytics = await getUserAnalyticsServer();
 *
 *   // Log user analytics for tracking
 *   await logUserSession({
 *     ...analytics,
 *     timestamp: new Date().toISOString(),
 *   });
 *
 *   return new Response('Analytics recorded', { status: 200 });
 * }
 *
 * @example
 * // Usage with error handling
 * try {
 *   const userData = await getUserAnalyticsServer();
 *   console.log('User analytics:', {
 *     browser: userData.browser,
 *     os: userData.os,
 *     deviceType: userData.deviceType
 *   });
 * } catch (error) {
 *   console.error('Failed to capture user analytics:', error);
 *   // Fallback to default values
 * }
 *
 * @remarks
 * - This function is specifically designed for Next.js server-side execution.
 * - IP detection follows a fallback chain: X-Forwarded-For → CF-Connecting-IP → X-Real-IP → '127.0.0.1'
 * - The X-Forwarded-For header may contain multiple IPs; the function takes the first one.
 * - User-Agent parsing uses the `ua-parser-js` library for accurate browser/OS detection.
 * - Device type defaults to 'desktop' when the User-Agent doesn't specify a device type.
 * - All string values fall back to 'Unknown' when data cannot be extracted.
 * - The function must be called in a server context; it will not work in client components.
 * - Consider caching the result if called frequently within the same request lifecycle.
 */
export async function getUserAnalyticsServer(): Promise<UserAnalyticsData> {
    const headerList = await headers();
    const userAgent = headerList.get('user-agent') || 'Unknown';

    const ip =
        headerList.get('x-forwarded-for')?.split(',')[0].trim() ||
        headerList.get('cf-connecting-ip') ||
        headerList.get('x-real-ip') ||
        '127.0.0.1';

    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    const browser = result.browser.name
        ? `${result.browser.name} ${result.browser.version || ''}`.trim()
        : 'Unknown';

    const os = result.os.name
        ? `${result.os.name} ${result.os.version || ''}`.trim()
        : 'Unknown';

    const deviceType = (result.device.type as UserAnalyticsData['deviceType']) || 'desktop';

    return {
        ip,
        userAgent,
        browser,
        os,
        deviceType,
    };
}