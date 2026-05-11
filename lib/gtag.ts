export const GA_TRACKING_ID = "AW-18142188601";

interface GtagEvent {
    action: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: string | number | boolean | undefined;
}

declare global {
    interface Window {
        gtag: (
            type: string,
            action: string,
            params: {
                event_category?: string;
                event_label?: string;
                value?: number;
                [key: string]: string | number | boolean | undefined;
            }
        ) => void;
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, ...rest }: GtagEvent) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
            ...rest
        });
    }
};
