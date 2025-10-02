# TypeScript Merge Function Project
 
เป็นโปรเจกต์ TypeScript ที่สร้างฟังก์ชัน merge สำหรับรวม array ตัวเลข 3 ชุดที่ถูกเรียงลำดับไว้ล่วงหน้าให้กลายเป็น array เดียวที่เรียงจากน้อยไปมาก. โปรเจกต์นี้ถูกสร้างขึ้นตามข้อกำหนดของโจทย์ โดยเฉพาะอย่างยิ่งเงื่อนไขที่ ห้ามใช้ฟังก์ชัน sort ที่มีมาให้
อัลกอริทึมที่ใช้จะทำการรวม collections อย่างมีประสิทธิภาพ โดยคำนึงถึงลำดับการเรียงเริ่มต้นของข้อมูล และสามารถจัดการกับกรณีพิเศษต่างๆ เช่น ตัวเลขติดลบ, ค่าซ้ำ และ array ว่างได้.
 
## Features 
 
 รวม 3 Collections: รวม `collection_1`,`collection_2` และ `collection_3` ที่ให้ผลลัพธ์เรียงจาก `น้อย` ไป `มาก`จากข้อมูลทั้ง 3 collection
 

## Given:
 
- collection_1: อาร์เรย์ตัวเลขเรียงจากน้อยไปมาก
 
- collection_2: อาร์เรย์ตัวเลขเรียงจากน้อยไปมาก
 
- collection_3: อาร์เรย์ตัวเลขเรียงจากมากไปน้อย
 
## Returns:
 
  อาร์เรย์ใหม่ที่รวมทุกค่าจากทั้งสามชุดและเรียงจากน้อยไปมาก
 
## Constraint:
 
  ห้ามใช้ฟังก์ชัน sort() ในตัว JavaScript/TypeScript

# Getting Started
 
ตรวจสอบเวอร์ชัน:

```

node -v

npm -v

```

## Installation dependencies

```bash

git clone <repository-url>

cd <project-directory>

npm install

```

## Running Tests
 
รันชุดทดสอบด้วย:

```

npm test

```

## Run Example
 
คอมไพล์และรันตัวอย่างใน src/index.ts:
```
npm start
```
## Usage
 
ตัวอย่างการใช้งาน:
```typescript
import { merge3Arrays } from "./src/merge_3_arrays.js"; // ใช้ .js เมื่อรันจาก dist
 
const array1 = [1, 4, 7];          // ascending
const array2 = [2, 5, 8];          // ascending
const array3 = [9, 6, 3];          // descending
 
const merged = merge3Arrays(array1, array2, array3);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Important Note

เพื่อให้ฟังก์ชันทำงานและให้ผลลัพธ์ที่ถูกต้อง array ที่เป็น input จะต้องถูกเรียงลำดับตามที่โจทย์ระบุไว้เท่านั้น (สองชุดแรกน้อยไปมาก, ชุดที่สามมากไปน้อย). หาก input ไม่ได้เรียงมาตามนี้ ผลลัพธ์ที่ได้อาจไม่ถูกเรียงลำดับ
