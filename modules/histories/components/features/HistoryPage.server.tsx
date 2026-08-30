import ErrorPage from "@/modules/shared/components/featured/ErrorPage";
import HistoryPageClient from "./HistoryPage.client";
import { getAllUserHistories } from "../../actions/getAllUserHistories";

export const HistoryPageServer = async () => {
  const histories = await getAllUserHistories();
  if (!histories.success) return <ErrorPage />;
  return <HistoryPageClient histories={histories.data} />;
};
