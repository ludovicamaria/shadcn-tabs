import AuthorsTabContent from "./app/components/authorsTabContent";
import BooksTabContent from "./app/components/booksTabContent";
import TabComponent from "./app/library/components/tabComponent";

export default function App() {
  return (
    <div className="flex w-full h-screen items-center justify-center p-8 bg-gray-50">
      <TabComponent
        tabDefaultValue={"authors"}
        tabValue1={"books"}
        tabName1={"Books"}
        tabValue2={"authors"}
        tabName2={"Authors"}
        tabContent={
          <>
            <BooksTabContent />
            <AuthorsTabContent />
          </>
        }
      />
    </div>
  );
}
