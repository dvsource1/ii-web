import { Button } from 'ii/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from 'ii/components/ui/table'
import { EyeIcon } from 'lucide-react'

const LessonsPage = () => {
  return (
    <div>
      <header className="flex justify-between">
        <div className="">
          <h1 className="text-4xl font-light">
            Lessons / <span className="text-gray-400">#124</span>
          </h1>
          <p className="font-light">Here are the lessions</p>
        </div>
        <div className="flex gap-4">
          <div className="h-32 w-44 rounded-lg bg-sky-400"></div>
          <div className="h-32 w-44 rounded-lg bg-purple-400"></div>
          <div className="h-32 w-44 rounded-lg bg-lime-400"></div>
        </div>
      </header>
      <div className="mt-6">
        <div className="flex justify-end gap-2">
          <Button className="bg-green-600">Add Lesson</Button>
          <Button className="bg-orange-600">
            <EyeIcon />
          </Button>
        </div>
        <TableDemo />
      </div>
    </div>
  )
}

export default LessonsPage

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
]

function TableDemo() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium text-green-500">
              {invoice.invoice}
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right text-purple-600">
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-green-600" colSpan={3}>
            Total
          </TableCell>
          <TableCell className="text-right text-purple-800">
            $2,500.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
