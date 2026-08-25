import React from "react";
import { getAllUserBookmark } from "../../actions/getAllUserBookmark";
import { redirect } from "next/navigation";
import ErrorPage from "@/modules/shared/components/featured/ErrorPage";
import BookmarkPageClient from "./BookmarkPage.client";

const BookmarkPageServer = async () => {
  const userBookmarks = await getAllUserBookmark();
  if (userBookmarks.status === 403) redirect("/auth/login");
  if (!userBookmarks.success) return <ErrorPage />;
  console.log("userBookmarks.data", userBookmarks);

  return <BookmarkPageClient bookmarks={userBookmarks.data} />;
};

export default BookmarkPageServer;
