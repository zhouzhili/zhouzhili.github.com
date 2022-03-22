// 先运行baiduPush.js，根据url.txt生成sitemap.xlm文件
const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')

const urlsFile = path.resolve(__dirname, '../urls.txt')
if (!fs.existsSync(urlsFile)) {
  console.log('urls.txt不存在，请先运行baiduPush.js');
}



function main() {
  const today = dayjs().format('YYYY-MM-DD')
  const siteMap = []
  const urls = fs.readFileSync(urlsFile).toString()
  urls.split('\n').forEach(url => {
    siteMap.push(`<url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
   </url>`)
  })
  const siteMapStr = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
         http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >
  
  <url>
   <loc>https://www.mapcenter.cn</loc>
   <lastmod>${today}</lastmod>
   <changefreq>weekly</changefreq>
   <priority>1.0</priority>
  </url>
  ${siteMap.join('\n')}
  </urlset>`

  fs.writeFileSync(path.resolve(__dirname, '../sitemap.xml'), siteMapStr, { encoding: 'utf8' })
}

main()