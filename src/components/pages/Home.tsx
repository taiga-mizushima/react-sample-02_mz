import { memo, FC } from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import Sidebar from "../atoms/layout/Sidebar";

export const Home: FC = memo(() => {
    return (
        <>
          <Header />
          <Sidebar />
          <Footer />
        </>
      );
});