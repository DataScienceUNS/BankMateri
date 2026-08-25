import BookmarkPageServer from "@/modules/bookmarks/components/features/BookmarkPage.server";
import LoadingPage from "@/modules/shared/components/featured/LoadingPage";
import React from "react";

const page = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <BookmarkPageServer />
    </React.Suspense>
  );
};

export default page;
