// import type { MetadataRoute } from 'next'
//
// const baseUrl = 'https://greenhuang.com'
// export default function sitemap(): MetadataRoute.Sitemap {
//     const url = (path: string): string => new URL(path, baseUrl).toString();
//
//     return [
//         {
//             url: url('/'),
//             lastModified: new Date(),
//             changeFrequency: 'yearly',
//             priority: 1,
//         },
//         {
//             url: url('/docs'),
//             lastModified: new Date(),
//             changeFrequency: 'weekly',
//             priority: 0.8,
//         },
//     ]
// }