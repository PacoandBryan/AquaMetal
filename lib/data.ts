
import fs from 'fs';
import path from 'path';

// Types based on the WP JSON structure
export interface WpPage {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
}

export interface WpMedia {
    id: number;
    source_url: string;
    slug: string;
    title: { rendered: string };
    alt_text: string;
    media_type: string;
    media_details: {
        width: number;
        height: number;
        sizes: {
            thumbnail?: { source_url: string };
            medium?: { source_url: string };
            large?: { source_url: string };
            full?: { source_url: string };
        };
    };
    toLocalPath?: string; // We will map this
}

const PAGES_PATH = path.join(process.cwd(), '../rawdata/pages.json');
const MEDIA_PATH = path.join(process.cwd(), '../rawdata/media.json');

function readJsonFile<T>(filePath: string): T[] {
    try {
        if (fs.existsSync(filePath)) {
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContents);
        }
        return [];
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
}

export function getAllPages(): WpPage[] {
    return readJsonFile<WpPage>(PAGES_PATH);
}

export function getPageBySlug(slug: string): WpPage | undefined {
    const pages = getAllPages();
    return pages.find(p => p.slug === slug);
}

export function getAllMedia(): WpMedia[] {
    // 1. Get images from JSON if available
    const jsonMedia = readJsonFile<WpMedia>(MEDIA_PATH).map(m => {
        const filename = m.source_url.split('/').pop()?.split('?')[0];
        return {
            ...m,
            toLocalPath: filename ? `/images/${filename}` : m.source_url
        };
    });

    // 2. Scan public/images directory for additional images
    const publicImagesDir = path.join(process.cwd(), 'public/images');
    let localImages: WpMedia[] = [];

    try {
        if (fs.existsSync(publicImagesDir)) {
            const files = fs.readdirSync(publicImagesDir);

            // Filter for image extensions
            const imageFiles = files.filter(file =>
                /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file) &&
                !file.startsWith('.')
            );

            // Create WpMedia objects for local files
            localImages = imageFiles.map((file, index) => {
                // Check if this file is already in jsonMedia (by filename)
                const existsInJson = jsonMedia.some(m => m.toLocalPath === `/images/${file}`);

                if (existsInJson) return null;

                return {
                    id: 10000 + index, // detailed ID to avoid conflicts
                    source_url: `/images/${file}`,
                    slug: file.replace(/\.[^/.]+$/, "").toLowerCase(),
                    title: { rendered: file.replace(/[_-]/g, " ").replace(/\.[^/.]+$/, "") },
                    alt_text: file.replace(/[_-]/g, " "),
                    media_type: 'image',
                    media_details: {
                        width: 800, // Fallback dimensions
                        height: 600,
                        sizes: {
                            full: { source_url: `/images/${file}` }
                        }
                    },
                    toLocalPath: `/images/${file}`
                } as WpMedia;
            }).filter((item): item is WpMedia => item !== null);
        }
    } catch (error) {
        console.error("Error scanning public/images:", error);
    }

    // Return combined unique list
    return [...jsonMedia, ...localImages];
}
