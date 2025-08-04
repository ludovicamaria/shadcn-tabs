export interface AppTabProps {
  inputValue1: string;
  inputValue2: string;
  inputValue3: string;
  value1: string;
  title1: string;
  value2: string;
  title2: string;
  cardTitle1: string;
  htmlForLabel1: string;
  labelName1: string;
  inputId1: string;
  placeHolder1: string;
  onChange1: (value: string) => void;
  htmlForLabel2: string;
  labelName2: string;
  inputId2: string;
  placeHolder2: string;
  onChange2: (value: string) => void;
  htmlForLabel3: string;
  labelName3: string;
  inputId3: string;
  placeHolder3: string;
  onChange3: (value: string) => void;
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  buttonText: string;

}