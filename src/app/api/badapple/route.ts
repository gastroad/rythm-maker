import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

function loadData(index: number): any {
  const data = fs.readFileSync(path.join(
    process.cwd(),
    'src/assets/badApple/',
    `${index + 1}.json`
  ), 'utf8');
  return JSON.parse(data);
}

export async function GET(request: NextRequest) {
  const data: any[][] = []
  new Array(22).fill(0).forEach((_, index) => {
    data.push(...loadData(index))
  });

  const json_response = {
    status: 'success',
    results: data,
  };
  return NextResponse.json(json_response);
}