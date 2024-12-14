// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
    redirect('/main/index.html'); // 원하는 경로로 리다이렉트
    return null; // 리다이렉트 후 화면에 표시되지 않음
}