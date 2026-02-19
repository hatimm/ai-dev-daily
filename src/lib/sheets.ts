import Papa from 'papaparse';

export interface Tool {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    description: string;
    link: string;
    image?: string;
    pricing: string;
    rating: number;
    tags: string[];
    featured: boolean;
    createdAt: string;
}

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxO3Q2oYMsWk5tIteWGaOVgrq2eCNdeloQk-bW8FomGOuyryoB5p9RySKYSIjgiQyMsKedz5k19uV4/pub?output=csv';

export async function getToolsFromSheet(): Promise<Tool[]> {
    try {
        const response = await fetch(SHEET_CSV_URL);
        if (!response.ok) throw new Error('Failed to fetch sheet data');

        const csvData = await response.text();

        const { data } = Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
        });

        return (data as any[]).map(row => ({
            id: row.id || row.name?.toLowerCase().replace(/\s+/g, '-'),
            name: row.name,
            category: row.category,
            subcategory: row.subcategory,
            description: row.description,
            link: row.website,
            image: row.image_url,
            pricing: row.pricing,
            rating: parseFloat(row.rating) || 0,
            tags: row.tags ? row.tags.split(',').map((t: string) => t.trim()) : [],
            featured: row.featured?.toLowerCase() === 'true',
            createdAt: row.created_at,
        }));
    } catch (error) {
        console.error('Error fetching tools from sheet:', error);
        return [];
    }
}
