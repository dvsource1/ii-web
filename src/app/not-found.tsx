import { Alert, AlertDescription, AlertTitle } from 'ii/components/ui/alert'
import Link from 'next/link'
import { TriangleAlert } from 'lucide-react'

const NotFound = () => {
  return (
    <div>
      <Alert variant="destructive">
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>404.</AlertTitle>
        <AlertDescription>
          The page you are looking for does not exist.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default NotFound
