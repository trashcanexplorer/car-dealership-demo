import fsPromises from 'fs/promises';
import path from 'path'

export async function fetchData() {
    const filePath = path.join(process.cwd(), 'src/lib/cars.json');
    const json = await fsPromises.readFile(filePath);
    const data = JSON.parse(json);
    return data;
}