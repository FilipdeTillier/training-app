import classNames from "classnames";
import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";

import { appPaths } from "@helpers/paths";
import { Footer } from "../Footer";
import { Header } from "../Header";

const headerVisiblePaths = [appPaths.results, appPaths.offer];

export const Container = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isHeaderVisible = useMemo(
    () => router.pathname && headerVisiblePaths.includes(router.pathname),
    [router]
  );
  return (
    <div className={classNames("min-h-full flex flex-col bg-slate-50")}>
      {isHeaderVisible && <Header />}
      <div className="container max-w-screen-lg mx-auto flex-1">
        <main className="w-full px-4 md:px-0">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
