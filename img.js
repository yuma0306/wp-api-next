import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const apiUrl = 'https://dorango-farm.com/wp-json/wp/v2/media/';
const images = await fetchImageUrls(apiUrl);
await resetImgDir();

images.forEach(async (imageUrl) => {
  const imageName = path.basename(imageUrl, path.extname(imageUrl));
  const localPath = path.resolve(dirName, 'public/img', `${imageName}${path.extname(imageUrl)}`);
  try {
    await downloadImage(imageUrl, localPath);
    console.log(`Image ${imageName} をダウンロードしました`);
  } catch (err) {
    console.error(`Image ${imageName} のダウンロードに失敗しました:`, err);
  }
});

async function downloadImage(url, filepath) {
  const writer = fs.createWriteStream(filepath);
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function fetchImageUrls(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data.map(item => item.source_url);
  } catch (error) {
    console.error('Image URLs の取得に失敗しました:', error);
    return [];
  }
}

async function resetImgDir() {
  const imgDir = path.join(dirName, 'public/img');
  try {
    const files = await fs.promises.readdir(imgDir);
    for (const file of files) {
      await fs.promises.unlink(path.join(imgDir, file));
    }
  } catch (err) {
    console.error('Image ディレクトリのリセットに失敗しました:', err);
  }
}
