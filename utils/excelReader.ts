import * as XLSX from 'xlsx';

export function readExcel(filePath: string, sheetName: string) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet) as { username: string; password: string; itemName: string; firstName: string; 
    lastName: string; title: string; postalCode: string; valid: boolean }[];
}
