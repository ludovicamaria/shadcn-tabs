import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { TabsContent } from "../../components/ui/tabs";
import { ErrorComponent } from "../library/components/errorComponent";

export const BooksTabContent = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [showButton, setShowButton] = useState<boolean>(false);
  const blankCondition = title === "" || genre === "" || publishedYear === "";
  const validYear = /^\d{4}$/.test(publishedYear);

  useEffect(() => {
    if (blankCondition) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  return (
    <TabsContent value="books">
      <Card className="w-full h-[75vh] flex flex-col border-amber-200">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold">Books</CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-center max-w-3xl mx-0 px-4 space-y-10">
          <div className="grid gap-6 w-full max-w-xl">
            <Label htmlFor="tabs-demo-name" className="text-2xl text-left">
              Title
            </Label>
            <Input
              id="tabs-demo-name"
              placeholder="Please type in a title"
              className="p-5 text-2xl border-1 border-amber-200 focus-visible:ring-yellow-200 focus-visible:ring-3 focus-visible:border-amber-200"
              onChange={(e) => {
                e.preventDefault();
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="grid gap-6 w-full max-w-xl">
            <Label htmlFor="tabs-demo-genre" className="text-2xl text-left">
              Genre
            </Label>
            <Input
              id="tabs-demo-genre"
              placeholder="Please type in a genre"
              className="p-5 text-2xl border-1 border-amber-200 focus-visible:ring-yellow-200 focus-visible:ring-3 focus-visible:border-amber-200"
              onChange={(e) => {
                e.preventDefault();
                setGenre(e.target.value);
              }}
            />
          </div>

          <div className="grid gap-6 w-full max-w-xl">
            <Label htmlFor="tabs-demo-year" className="text-2xl text-left">
              Published year
            </Label>
            <Input
              id="tabs-demo-year"
              placeholder="Please type in a published year"
              className="p-5 text-2xl border-1 border-amber-200 focus-visible:ring-yellow-200 focus-visible:ring-3 focus-visible:border-amber-200"
              onChange={(e) => {
                e.preventDefault();
                setPublishedYear(e.target.value);
              }}
            />
          </div>
        </CardContent>

        <CardFooter className="justify-start px-4 flex-col items-start gap-4">
          {blankCondition || !validYear ? (
            <ErrorComponent
              message="Fields cannot be empty or invalid"
              title={"Missing or invalid fields"}
              description={
                "Please make sure you have a title, a genre and valid published year"
              }
            />
          ) : null}
          <Button
            className="px-10 py-5 text-2xl bg-red-600"
            onClick={() =>
              alert(JSON.stringify({ title, genre, publishedYear }))
            }
            disabled={showButton}
          >
            Send alert
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default BooksTabContent;
