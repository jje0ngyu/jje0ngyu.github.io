import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

type LayoutProps = {
    children: React.ReactNode; // 페이지별 내용이 들어감
};

function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-yellow-200">
            {/* 상단 공통 Header */}
            <Header />

            {/* 메인 컨텐츠 영역 */}
            <main className={styles.container}>
                {children}
            </main>

            {/* 하단 공통 Footer */}
            <Footer />
        </div>
    );
}

export default Layout;
