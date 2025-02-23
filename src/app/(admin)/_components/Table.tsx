import {
  Table,
  TableBody,
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
import { Checkbox } from "@/components/ui/checkbox";

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
];

export const Tables = () => {
  return (
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
  );
};
