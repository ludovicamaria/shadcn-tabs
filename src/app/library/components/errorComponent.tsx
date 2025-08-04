import { AlertCircleIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert"
import type { ErrorProps } from "../interfaces/errorProps"

export function ErrorComponent(errorProps: ErrorProps) {
  return (
    <div className="grid w-full max-w-xl items-start gap-4 flex flex-col">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{errorProps.title}</AlertTitle>
        <AlertDescription>
          <p>{errorProps.description}</p>
          <ul className="list-inside list-disc text-sm">
            <li>{errorProps.message}</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
