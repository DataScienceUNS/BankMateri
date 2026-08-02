import React from 'react';
import localFont from "next/font/local";

const InterFont = localFont({
    src: [
        {
            path: "./Inter/Inter_18pt-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-BlackItalic.ttf",
            weight: "900",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-ExtraBoldItalic.ttf",
            weight: "800",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-ExtraLightItalic.ttf",
            weight: "200",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-LightItalic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-MediumItalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-SemiBoldItalic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "./Inter/Inter_18pt-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./Inter/Inter_18pt-ThinItalic.ttf",
            weight: "100",
            style: "italic",
        },
    ],
    variable: "--font-inter"
})

const FontProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    return <div className={`${InterFont.className} font-inter`}>{children}</div>;
};

export default FontProvider;