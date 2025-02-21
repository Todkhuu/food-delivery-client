import { Checkbox } from "@/components/ui/checkbox";
import { AvatarDemo } from "../_components/Avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const orders = [
  {
    customer: "Test@gamil.com",
    Food: "foods",
    Date: "2024/12/20",
    Total: "$26.97",
    address: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen...",
  },
  {
    customer: "Test@gamil.com",
    Food: "foods",
    Date: "2024/12/20",
    Total: "$26.97",
    address: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen...",
  },
  {
    customer: "Test@gamil.com",
    Food: "foods",
    Date: "2024/12/20",
    Total: "$26.97",
    address: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen...",
  },
];

const Orders = () => {
  return (
    <div className="bg-[#f4f4f5] w-[90.8vw] px-[40px]">
      <div className="w-[87vw] flex justify-end my-[24px]">
        <AvatarDemo />
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[52px]">
              <Checkbox />
            </TableHead>
            <TableHead className="w-[56px]">№</TableHead>
            <TableHead className="w-[213px]">Customer</TableHead>
            <TableHead className="w-[160px]">Food</TableHead>
            <TableHead className="w-[160px]">Date</TableHead>
            <TableHead className="w-[160px]">Total</TableHead>
            <TableHead className="w-[213px]">Delivery Address</TableHead>
            <TableHead className="w-[160px]">Delivery state</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="w-[52px]">
                <Checkbox />
              </TableCell>
              <TableCell>1</TableCell>
              <TableCell className="font-medium">{order.customer}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger> {order.Food}</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>{order.Date}</TableCell>
              <TableCell>{order.Total}</TableCell>
              <TableCell>{order.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <TableCell colSpan={3}>Total</TableCell> */}
            {/* <TableCell className="text-right">$2,500.00</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
export default Orders;

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/registry/new-york-v4/ui/table";

// const invoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: "$250.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV002",
//     paymentStatus: "Pending",
//     totalAmount: "$150.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV003",
//     paymentStatus: "Unpaid",
//     totalAmount: "$350.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV004",
//     paymentStatus: "Paid",
//     totalAmount: "$450.00",
//     paymentMethod: "Credit Card",
//   },
//   {
//     invoice: "INV005",
//     paymentStatus: "Paid",
//     totalAmount: "$550.00",
//     paymentMethod: "PayPal",
//   },
//   {
//     invoice: "INV006",
//     paymentStatus: "Pending",
//     totalAmount: "$200.00",
//     paymentMethod: "Bank Transfer",
//   },
//   {
//     invoice: "INV007",
//     paymentStatus: "Unpaid",
//     totalAmount: "$300.00",
//     paymentMethod: "Credit Card",
//   },
// ];

// export function TableDemo() {
//   return (
//     <Table>
//       <TableCaption>A list of your recent invoices.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Invoice</TableHead>
//           <TableHead>Status</TableHead>
//           <TableHead>Method</TableHead>
//           <TableHead className="text-right">Amount</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {invoices.map((invoice) => (
//           <TableRow key={invoice.invoice}>
//             <TableCell className="font-medium">{invoice.invoice}</TableCell>
//             <TableCell>{invoice.paymentStatus}</TableCell>
//             <TableCell>{invoice.paymentMethod}</TableCell>
//             <TableCell className="text-right">{invoice.totalAmount}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={3}>Total</TableCell>
//           <TableCell className="text-right">$2,500.00</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//   );
// }
