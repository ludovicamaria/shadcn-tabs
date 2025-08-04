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

export const AuthorsTabContent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");

  const [showButton, setShowButton] = useState(false);

  const blankCondition = firstName === "" || lastName === "" || date === "";

  const isDateInTheFuture = (inputDateStr: string): boolean => {
    const inputDate = new Date(inputDateStr);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDate > today;
  };

  useEffect(() => {
    setShowButton(blankCondition);
  }, [firstName, lastName, date]);

  return (
    <TabsContent value="authors">
      <Card className="w-full h-[75vh] flex flex-col border-amber-200 focus-visible:ring-amber-200 focus-visible:ring-3">
        <CardHeader>
          <CardTitle className="text-4xl font-semibold">Authors</CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-center max-w-3xl mx-0 px-4 space-y-10">
          <div className="grid gap-6 w-full max-w-xl">
            <Label htmlFor="tabs-demo-current" className="text-2xl text-left">
              First name
            </Label>
            <Input
              id="tabs-demo-current"
              type="text"
              placeholder="Please type in a first name"
              className="p-5 text-2xl border-1 border-amber-200 focus-visible:ring-yellow-200 focus-visible:ring-3 focus-visible:border-amber-200"
              onChange={(e) => {
                e.preventDefault();
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className="grid gap-6 w-full max-w-xl">
            <Label htmlFor="tabs-demo-new-last" className="text-2xl text-left">
              Last name
            </Label>
            <Input
              id="tabs-demo-new-last"
              type="text"
              placeholder="Please type in a last name"
              className="p-5 text-2xl border-1 border-amber-200 focus-visible:ring-yellow-200 focus-visible:ring-3 focus-visible:border-amber-200"
              onChange={(e) => {
                e.preventDefault();
                setLastName(e.target.value);
              }}
            />
          </div>

          <div className="grid gap-6 w-full max-w-xl">
            <Label htmlFor="tabs-demo-new-dob" className="text-2xl text-left">
              Date of birth
            </Label>
            <Input
              id="tabs-demo-new-dob"
              type="date"
              className="p-5 text-2xl border-1 border-amber-200 focus-visible:ring-yellow-200 focus-visible:ring-3 focus-visible:border-amber-200"
              onChange={(e) => {
                e.preventDefault();
                setDate(e.target.value);
              }}
            />
          </div>
        </CardContent>

        <CardFooter className="justify-start px-4 flex-col items-start gap-4">
          {blankCondition || isDateInTheFuture(date) ? (
            <ErrorComponent
              message="Fields cannot be empty or invalid"
              title={"Missing or invalid fields"}
              description={
                "Please make sure you have a first name, a last name and valid date of birth"
              }
            />
          ) : null}
          <Button
            className="px-10 py-5 text-2xl bg-red-600"
            onClick={() => alert(JSON.stringify({ firstName, lastName, date }))}
          >
            Send alert
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default AuthorsTabContent;
